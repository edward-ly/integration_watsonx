<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Watsonx\TaskProcessing;

use Exception;
use OCA\Watsonx\AppInfo\Application;
use OCA\Watsonx\Service\WatsonxAPIService;
use OCA\Watsonx\Service\WatsonxSettingsService;
use OCP\IAppConfig;
use OCP\IL10N;
use OCP\TaskProcessing\EShapeType;
use OCP\TaskProcessing\ISynchronousProvider;
use OCP\TaskProcessing\ShapeDescriptor;
use OCP\TaskProcessing\ShapeEnumValue;
use RuntimeException;

class ChangeToneProvider implements ISynchronousProvider {

	public function __construct(
		private WatsonxAPIService $watsonxAPIService,
		private IAppConfig $appConfig,
		private WatsonxSettingsService $watsonxSettingsService,
		private IL10N $l,
		private ?string $userId,
	) {
	}

	public function getId(): string {
		return Application::APP_ID . '-changetone';
	}

	public function getName(): string {
		return $this->watsonxAPIService->getServiceName();
	}

	public function getTaskTypeId(): string {
		if (class_exists('OCP\\TaskProcessing\\TaskTypes\\TextToTextChangeTone')) {
			return \OCP\TaskProcessing\TaskTypes\TextToTextChangeTone::ID;
		}
		return ChangeToneTaskType::ID;
	}

	public function getExpectedRuntime(): int {
		return $this->watsonxAPIService->getExpTextProcessingTime();
	}

	public function getInputShapeEnumValues(): array {
		$toneInputEnumValue = new ShapeEnumValue($this->l->t('Detect language'), 'detect_language');
		return [
			'tone' => [
				new ShapeEnumValue($this->l->t('Friendlier'), 'friendler'),
				new ShapeEnumValue($this->l->t('More formal'), 'more formal'),
				new ShapeEnumValue($this->l->t('Funnier'), 'funnier'),
				new ShapeEnumValue($this->l->t('More casual'), 'more casual'),
				new ShapeEnumValue($this->l->t('More urgent'), 'more urgent'),
			],
		];
	}

	public function getInputShapeDefaults(): array {
		return [
			'tone' => 'friendler',
		];
	}

	public function getOptionalInputShape(): array {
		return [
			'max_tokens' => new ShapeDescriptor(
				$this->l->t('Maximum output words'),
				$this->l->t('The maximum number of words/tokens that can be generated in the completion.'),
				EShapeType::Number
			),
			'model' => new ShapeDescriptor(
				$this->l->t('Model'),
				$this->l->t('The model used to generate the completion'),
				EShapeType::Enum
			),
		];
	}

	public function getOptionalInputShapeEnumValues(): array {
		return [
			'model' => $this->watsonxAPIService->getModelEnumValues($this->userId),
		];
	}

	public function getOptionalInputShapeDefaults(): array {
		$adminModel = $this->appConfig->getValueString(Application::APP_ID, 'default_completion_model_id', Application::DEFAULT_MODEL_ID) ?: Application::DEFAULT_MODEL_ID;
		return [
			'max_tokens' => 1000,
			'model' => $adminModel,
		];
	}

	public function getOutputShapeEnumValues(): array {
		return [];
	}

	public function getOptionalOutputShape(): array {
		return [];
	}

	public function getOptionalOutputShapeEnumValues(): array {
		return [];
	}

	public function process(?string $userId, array $input, callable $reportProgress): array {
		$startTime = time();

		if (!isset($input['input']) || !is_string($input['input'])) {
			throw new RuntimeException('Invalid input text');
		}
		$textInput = $input['input'];
		$toneInput = $input['tone'];
		$prompt = "Reformulate the following text in a $toneInput tone in its original language. Output only the reformulation. Here is the text:" . "\n\n" . $textInput . "\n\n" . 'Do not mention the used language in your reformulation. Here is your reformulation in the same language:';

		$maxTokens = null;
		if (isset($input['max_tokens']) && is_int($input['max_tokens'])) {
			$maxTokens = $input['max_tokens'];
		}

		if (isset($input['model']) && is_string($input['model'])) {
			$model = $input['model'];
		} else {
			$model = $this->appConfig->getValueString(Application::APP_ID, 'default_completion_model_id', Application::DEFAULT_MODEL_ID) ?: Application::DEFAULT_MODEL_ID;
		}

		try {
			if ($this->watsonxSettingsService->getChatEndpointEnabled()) {
				$completion = $this->watsonxAPIService->createChatCompletion($userId, $model, $prompt, null, null, 1, $maxTokens);
				$completion = $completion['messages'];
			} else {
				$completion = $this->watsonxAPIService->createCompletion($userId, $prompt, 1, $model, $maxTokens);
			}
		} catch (Exception $e) {
			throw new RuntimeException('Watsonx request failed: ' . $e->getMessage());
		}
		if (count($completion) > 0) {
			$endTime = time();
			$this->watsonxAPIService->updateExpTextProcessingTime($endTime - $startTime);
			return ['output' => array_pop($completion)];
		}

		throw new RuntimeException('No result in watsonx response.');
	}
}

<?php

declare(strict_types=1);

/**
 * @author Julien Veyssier <julien-nc@posteo.net>
 * @copyright Julien Veyssier 2022
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\OpenAi\Cron;

use OCA\OpenAi\Db\ImageGenerationMapper;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;
use Psr\Log\LoggerInterface;

class CleanupImageGenerations extends TimedJob {
	private LoggerInterface $logger;
	private ImageGenerationMapper $imageGenerationMapper;

	public function __construct(ITimeFactory $time,
								ImageGenerationMapper $imageGenerationMapper,
								LoggerInterface $logger) {
		parent::__construct($time);
		$this->logger = $logger;
		$this->setInterval(60 * 60 * 24);
		$this->imageGenerationMapper = $imageGenerationMapper;
	}

	protected function run($argument) {
		$this->logger->debug('Run cleanup job for OpenAI image generations');
		$cleanedUp = $this->imageGenerationMapper->cleanupGenerations();
		$this->logger->debug('Deleted ' . $cleanedUp . ' idle generations');
	}
}

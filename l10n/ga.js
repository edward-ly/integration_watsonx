OC.L10N.register(
    "integration_openai",
    {
    "Unknown models error" : "Earráid samhlacha anaithnid",
    "Default" : "Réamhshocrú",
    "Text generation" : "Giniúint téacs",
    "Image generation" : "Giniúint íomhá",
    "Audio transcription" : "Trascríobh fuaime",
    "Unknown" : "Anaithnid",
    "tokens" : "comharthaí",
    "images" : "íomhánna",
    "seconds" : "soicind",
    "Unknown error while retrieving quota usage." : "Earráid anaithnid agus úsáid cuóta á aisghabháil.",
    "Text generation quota exceeded" : "Sáraíodh an cuóta giniúna téacs",
    "Unknown text generation error" : "Earráid anaithnid giniúna téacs",
    "Could not read audio file." : "Níorbh fhéidir an comhad fuaime a léamh.",
    "Audio transcription quota exceeded" : "Sáraíodh an cuóta trascríobh fuaime",
    "Unknown audio trancription error" : "Earráid anaithnid trascríobh fuaime",
    "Image generation quota exceeded" : "Sáraíodh an cuóta giniúna íomhá",
    "Unknown image generation error" : "Earráid giniúna íomhá anaithnid",
    "Bad HTTP method" : "Droch-mhodh HTTP",
    "Bad credentials" : "Dintiúir dona",
    "API request error: " : "Earráid iarratais API:",
    "Detect language" : "Braith teanga",
    "Friendlier" : "Níos cairdiúla",
    "More formal" : "Níos foirmiúla",
    "Funnier" : "Níos greannmhaire",
    "More casual" : "Níos ócáideach",
    "More urgent" : "Níos práinní",
    "Maximum output words" : "Focail aschuir uasta",
    "The maximum number of words/tokens that can be generated in the completion." : "An t-uaslíon focal/chomharthaí is féidir a ghiniúint sa chríochnú.",
    "Model" : "Mionsamhail",
    "The model used to generate the completion" : "An tsamhail a úsáidtear chun an críochnú a ghiniúint",
    "Change Tone" : "Athraigh Ton",
    "Ask a question about your data." : "Cuir ceist faoi do shonraí.",
    "Input text" : "Téacs ionchuir",
    "Write a text that you want the assistant to rewrite in another tone." : "Scríobh téacs a theastaíonn uait don chúntóir a athscríobh i dton eile.",
    "Desired tone" : "Ton inmhianaithe",
    "In which tone should your text be rewritten?" : "Cén ton inar cheart do théacs a athscríobh?",
    "Generated response" : "Freagra ginte",
    "The rewritten text in the desired tone, written by the assistant:" : "An téacs athscríofa sa ton inmhianaithe, scríofa ag an gcúntóir:",
    "OpenAI's DALL-E 2" : "DALL-E 2 de chuid OpenAI",
    "Size" : "Méid",
    "Optional. The size of the generated images. Must be in 256x256 format. Default is %s" : "Roghnach. Méid na n-íomhánna ginte. Caithfidh sé a bheith i bhformáid 256x256. Réamhshocrú is %s",
    "The model used to generate the images" : "An tsamhail a úsáidtear chun na híomhánna a ghiniúint",
    "OpenAI and LocalAI integration" : "Comhtháthú OpenAI agus LocalAI",
    "Integration of OpenAI and LocalAI services" : "Comhtháthú seirbhísí OpenAI agus LocalAI",
    "⚠️ The smart pickers have been removed from this app\nas they are now included in the [Assistant app](https://apps.nextcloud.com/apps/assistant).\n\nThis app implements:\n\n* Text generation providers: Free prompt, Summarize, Headline, Context Write, Chat, and Reformulate (using any available large language model)\n* A Translation provider (using any available language model)\n* A SpeechToText provider (using Whisper)\n* An image generation provider\n\n⚠️ Context Write, Summarize, Headline and Reformulate have mainly been tested with OpenAI.\nThey might work when connecting to other services, without any guarantee.\n\nInstead of connecting to the OpenAI API for these, you can also connect to a self-hosted [LocalAI](https://localai.io) instance or [Ollama](https://ollama.com/) instance\nor to any service that implements an API similar to the OpenAI one, for example: [Plusserver](https://www.plusserver.com/en/ai-platform/) or [MistralAI](https://mistral.ai).\n\n⚠️ This app is mainly tested with OpenAI. We do not guarantee it works perfectly\nwith other services that implement OpenAI-compatible APIs with slight differences.\n\n## Improve AI task pickup speed\n\nTo avoid task processing execution delay, setup at 4 background job workers in the main server (where Nextcloud is installed). The setup process is documented here: https://docs.nextcloud.com/server/latest/admin_manual/ai/overview.html#improve-ai-task-pickup-speed\n\n## Ethical AI Rating\n### Rating for Text generation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n\n### Rating for Translation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n### Rating for Image generation using DALL·E via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inferencing of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be ran on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via the OpenAI API: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can run on-premise\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n### Rating for Text generation via LocalAI: 🟢\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n* The training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n\n### Rating for Image generation using Stable Diffusion via LocalAI : 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via LocalAI: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "⚠️ Baineadh na roghnóirí cliste den aip seo\nmar go bhfuil siad san áireamh anois san [Aip Chúntóra](https://apps.nextcloud.com/apps/assistant).\n\nCuireann an aip seo i bhfeidhm:\n\n* Soláthraithe giniúna téacs: leid saor in aisce, Achoimre, Ceannlíne, Scríobh Comhthéacs, Comhrá agus Athfhoirmliú (ag úsáid aon mhúnla mór teanga atá ar fáil)\n* Soláthraí aistriúcháin (ag úsáid aon mhúnla teanga atá ar fáil)\n* Soláthraí SpeechToText (ag úsáid Whisper)\n* Soláthraí giniúna íomhá\n\n⚠️ Comhthéacs Rinneadh Scríobh, Achoimre, Ceannteideal agus Athfhoirmliú go príomha le OpenAI.\nD’fhéadfadh go n-oibreodh siad agus iad ag nascadh le seirbhísí eile, gan ráthaíocht ar bith.\n\nIn ionad nascadh leis an OpenAI API dóibh seo, is féidir leat nascadh le sampla féin-óstaithe [LocalAI] (https://localai.io) nó [Ollama](https://ollama.com/) freisin\nnó le haon seirbhís a chuireann API cosúil leis an gceann OpenAI i bhfeidhm, mar shampla: [Plusserver](https://www.plusserver.com/en/ai-platform/) nó [MistralAI]( https://mistral.ai ).\n\n⚠️ Déantar an aip seo a thástáil go príomha le OpenAI. Ní ráthaíocht go n-oibríonn sé go foirfe\nle seirbhísí eile a chuireann APIanna atá comhoiriúnach le OpenAI i bhfeidhm le difríochtaí beaga.\n\n## Feabhas a chur ar luas bailithe tasc AI\n\nChun moill ar fhorghníomhú próiseála tascanna a sheachaint, socraigh 4 oibrí poist chúlra sa phríomhfhreastalaí (áit a bhfuil Nextcloud suiteáilte). Tá an próiseas socraithe doiciméadaithe anseo: https://docs.nextcloud.com/server/latest/admin_manual/ai/overview.html#improve-ai-task-pickup-speed\n\n## Rátáil Eiticiúil AI\n### Rátáil do Ghiniúint Téacs ag úsáid ChatGPT tríd an OpenAI API: 🔴\n\nDiúltach:\n* Tá na bogearraí le haghaidh oiliúna agus tátal an tsamhail seo dílseánaigh, a chuireann srian le reáchtáil go háitiúil nó oiliúint leat féin\n* Níl an tsamhail oilte ar fáil go héasca, mar sin ní féidir an tsamhail a rith ar an áitreabh\n* Níl na sonraí oiliúna ar fáil go héasca, rud a chuireann srian ar chumas na bpáirtithe seachtracha seiceáil agus ceartú le haghaidh laofachta nó feidhmíocht agus úsáid CO2 na samhla a bharrfheabhsú.\n\n\n### Rátáil le haghaidh Aistriúcháin ag úsáid ChatGPT tríd an OpenAI API: 🔴\n\nDiúltach:\n* Tá na bogearraí le haghaidh oiliúna agus tátal an tsamhail seo dílseánaigh, a chuireann srian le reáchtáil go háitiúil nó oiliúint leat féin\n* Níl an tsamhail oilte ar fáil go héasca, mar sin ní féidir an tsamhail a rith ar an áitreabh\n* Níl na sonraí oiliúna ar fáil go héasca, rud a chuireann srian ar chumas na bpáirtithe seachtracha seiceáil agus ceartú le haghaidh laofachta nó feidhmíocht agus úsáid CO2 na samhla a bharrfheabhsú.\n\n### Rátáil do Ghiniúint Íomhá ag úsáid DALL·E tríd an OpenAI API: 🔴\n\nDiúltach:\n* Tá na bogearraí le haghaidh oiliúna agus tátal a bhaint as an múnla seo dílseánaigh, a theorannú a reáchtáil go háitiúil nó oiliúint tú féin\n* Níl an tsamhail oilte ar fáil go héasca, mar sin ní féidir an tsamhail a rith ar an áitreabh\n* Níl na sonraí oiliúna ar fáil go héasca, rud a chuireann srian ar chumas na bpáirtithe seachtracha a sheiceáil agus a cheartú le haghaidh laofachta nó feidhmíocht agus úsáid CO2 na samhla a bharrfheabhsú.\n\n\n### Rátáil le haghaidh Urlabhra go Téacs ag baint úsáide as Whisper tríd an OpenAI API: 🟡\n\nDearfach:\n* Is foinse oscailte iad na bogearraí le haghaidh oiliúna agus tátail na samhla seo\n* Tá an tsamhail oilte ar fáil saor in aisce, agus mar sin is féidir é a reáchtáil ar an áitreabh\n\nDiúltach:\n* Níl na sonraí oiliúna ar fáil go héasca, rud a chuireann srian ar chumas na bpáirtithe seachtracha a sheiceáil agus a cheartú le haghaidh laofachta nó feidhmíocht agus úsáid CO2 na samhla a bharrfheabhsú.\n\n### Rátáil do Ghiniúint Téacs trí LocalAI: 🟢\n\nDearfach:\n* Is foinse oscailte iad na bogearraí le haghaidh oiliúna agus tátail na samhla seo\n* Tá an tsamhail oilte ar fáil saor in aisce, agus mar sin is féidir é a rith san áitreabh\n* Tá na sonraí oiliúna ar fáil saor in aisce, rud a fhágann gur féidir a sheiceáil nó a cheartú le haghaidh laofachta nó an fheidhmíocht agus an úsáid CO2 a bharrfheabhsú.\n\n\n### Rátáil do Ghiniúint Íomhá ag baint úsáide as Idirleathadh Cobhsaí trí LocalAI : 🟡\n\nDearfach:\n* Is foinse oscailte iad na bogearraí le haghaidh oiliúna agus tátail na samhla seo\n* Tá an tsamhail oilte ar fáil saor in aisce, agus mar sin is féidir é a rith san áitreabh\n\nDiúltach:\n* Níl na sonraí oiliúna ar fáil go héasca, rud a chuireann srian le cumas na bpáirtithe seachtracha a sheiceáil agus a cheartú le haghaidh laofachta nó feidhmíocht agus úsáid CO2 na samhla a bharrfheabhsú.\n\n\n### Rátáil le haghaidh Óráid go Téacs ag baint úsáide as Whisper trí LocalAI: 🟡\n\nDearfach:\n* Tá na bogearraí le haghaidh oiliúna agus tátal a bhaint as an tsamhail seo foinse oscailte\n* Tá an tsamhail oilte ar fáil saor in aisce, agus mar sin is féidir é a rith san áitreabh\n\nDiúltach:\n* Níl na sonraí oiliúna ar fáil go héasca, rud a chuireann srian ar chumas na bpáirtithe seachtracha a sheiceáil agus a cheartú le haghaidh laofachta nó feidhmíocht agus úsáid CO2 na samhla a bharrfheabhsú.\n\nFoghlaim tuilleadh faoi Rátáil Eiticiúil AI Nextcloud [inár mblag]( https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).",
    "Service URL" : "URL seirbhíse",
    "Example: {example}" : "Sampla: {example}",
    "Leave empty to use {openaiApiUrl}" : "Fág folamh chun {openaiApiUrl} a úsáid",
    "With the current configuration, the target URL used to get the models is:" : "Leis an gcumraíocht reatha, is é an URL sprice a úsáidtear chun na samhlacha a fháil:",
    "This should include the address of your LocalAI instance (or any service implementing an API similar to OpenAI) along with the root path of the API. This URL will be accessed by your Nextcloud server." : "Ba cheart go gcuimseodh sé seo seoladh do chás LocalAI (nó aon seirbhís a chuireann API cosúil le OpenAI chun feidhme) mar aon le bunchosán an API. Beidh rochtain ag do fhreastalaí Nextcloud ar an URL seo.",
    "This can be a local address with a port like {example}. In this case, make sure 'allow_local_remote_servers' is set to true in config.php." : "Is féidir gur seoladh áitiúil é seo le port mar {example}. Sa chás seo, déan cinnte go bhfuil 'allow_local_remote_servers' socraithe go fíor i config.php.",
    "Service name (optional)" : "Ainm seirbhíse (roghnach)",
    "Example: LocalAI of university ABC" : "Sampla: LocalAI na hollscoile ABC",
    "This name will be displayed as provider name in the AI admin settings" : "Taispeánfar an t-ainm seo mar ainm an tsoláthraí sna socruithe admin AI",
    "Request timeout (seconds)" : "Iarr am istigh (soicindí)",
    "Timeout for the request to the external API" : "Teorainn ama don iarratas chuig an API seachtrach",
    "Authentication" : "Fíordheimhniú",
    "Authentication method" : "Modh fíordheimhnithe",
    "API key" : "Eochair API",
    "Basic Authentication" : "Fíordheimhniú Bunúsach",
    "API key (mandatory with OpenAI)" : "Eochair API (éigeantach le OpenAI)",
    "You can create an API key in your OpenAI account settings" : "Is féidir leat eochair API a chruthú i do shocruithe cuntais OpenAI",
    "Basic Auth user" : "Úsáideoir Bunúsach Auth",
    "Basic Auth password" : "Pasfhocal Auth Bunúsach",
    "Text completion endpoint" : "Críochphointe críochnaithe an téacs",
    "Chat completions" : "Críochnaithe comhrá",
    "Completions" : "Críochnaithe",
    "Selection of chat/completion endpoint is not available for OpenAI since it implicitly uses chat completions for \"instruction following\" fine-tuned models." : "Níl rogha críochphointe comhrá/críochnaithe ar fáil do OpenAI ós rud é go n-úsáideann sé comhlánú comhrá go hintuigthe le haghaidh samhlacha mionchoigeartaithe “teagasc a leanann”.",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "Má úsáidtear críochphointe an chomhrá d’fhéadfadh sé go bhfeabhsófar cáilíocht giniúna an téacs le haghaidh samhlacha mionchoigeartaithe “treoir a leanúint”.",
    "Default completion model to use" : "Múnla críochnaithe réamhshocraithe le húsáid",
    "More information about OpenAI models" : "Tuilleadh eolais faoi mhúnlaí OpenAI",
    "More information about LocalAI models" : "Tuilleadh eolais faoi shamhlacha LocalAI",
    "Extra completion model parameters" : "Paraiméadair múnla críochnaithe breise",
    "Default image generation model to use" : "Múnla giniúna íomhá réamhshocraithe le húsáid",
    "No models to list" : "Níl samhlacha le liostú",
    "Default image size" : "Méid réamhshocraithe na híomhá",
    "Default transcription model to use" : "Múnla trascríobh réamhshocraithe le húsáid",
    "Usage limits" : "Teorainneacha úsáide",
    "Quota enforcement time period (days)" : "Tréimhse ama forfheidhmithe cuóta (laethanta)",
    "Usage quotas per time period" : "Cuótaí úsáide in aghaidh na tréimhse ama",
    "Quota type" : "Cineál cuóta",
    "Per-user quota / period" : "Cuóta in aghaidh an úsáideora / tréimhse",
    "Current system-wide usage / period" : "Úsáid / tréimhse reatha ar fud an chórais",
    "A per-user limit for usage of this API type (0 for unlimited)" : "Teorainn in aghaidh an úsáideora maidir le húsáid den chineál API seo (0 le haghaidh neamhtheoranta)",
    "Max new tokens per request" : "Uasmhéid comharthaí nua in aghaidh an iarratais",
    "Maximum number of new tokens generated for a single text generation prompt" : "An líon uasta comharthaí nua ginte le haghaidh leid giniúna téacs amháin",
    "Select enabled features" : "Roghnaigh gnéithe cumasaithe",
    "Translation provider (to translate Talk messages for example)" : "Soláthraí aistriúcháin (chun teachtaireachtaí Talk a aistriú mar shampla)",
    "Text processing providers (to generate text, summarize, context write etc...)" : "Soláthraithe próiseála téacs (chun téacs a ghiniúint, achoimre a dhéanamh, comhthéacs a scríobh srl...)",
    "Image generation provider" : "Soláthraí giniúna íomhá",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "Soláthraí cainte go téacs (chun taifeadtaí Talk a thrascríobh mar shampla)",
    "JSON object. Check the API documentation to get the list of all available parameters. For example: {example}" : "réad JSON. Seiceáil an doiciméadú API chun liosta de na paraiméadair go léir atá ar fáil a fháil. Mar shampla: {example}",
    "Must be in 256x256 format (default is {default})" : "Caithfidh sé a bheith san fhormáid 256x256 (is é an réamhshocrú{default})",
    "Failed to load models" : "Theip ar lódáil samhlacha",
    "Failed to load quota info" : "Theip ar lódáil an fhaisnéis chuóta",
    "OpenAI admin options saved" : "Sábháladh roghanna riaracháin OpenAI",
    "Failed to save OpenAI admin options" : "Theip ar shábháil roghanna riaracháin OpenAI",
    "Your administrator defined a custom service address" : "Sainmhínigh do riarthóir seoladh seirbhíse saincheaptha",
    "Leave the API key empty to use the one defined by administrators" : "Fág an eochair API folamh chun an ceann atá sainmhínithe ag riarthóirí a úsáid",
    "You can create a free API key in your OpenAI account settings" : "Is féidir leat eochair API saor in aisce a chruthú i do shocruithe cuntais OpenAI",
    "Leave the username and password empty to use the ones defined by your administrator" : "Fág an t-ainm úsáideora agus an pasfhocal folamh chun na cinn atá sainmhínithe ag do riarthóir a úsáid",
    "Username" : "Ainm úsáideora",
    "your Basic Auth user" : "Do úsáideoir Basic Auth",
    "Password" : "Pasfhocal",
    "your Basic Auth password" : "Do phasfhocal Basic Auth",
    "Usage quota info" : "Eolas faoin gcuóta úsáide",
    "Usage" : "Úsáid",
    "Specifying your own API key will allow unlimited usage" : "Ceadóidh sonraíocht d'eochair API féin úsáid neamhtheoranta",
    "OpenAI options saved" : "Roghanna OpenAI sábháilte",
    "Failed to save OpenAI options" : "Theip ar shábháil roghanna OpenAI"
},
"nplurals=5; plural=(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4);");

<?php

return[
	'basePackage'=>[
		'baseUrl' => $this->mainAssets,
		'css' => [
			YII_DEBUG ? 'css/base.css' : 'css/base.min.css'
		],
		'js' => [
			YII_DEBUG ? 'js/base.js' : 'js/base.min.js',
		],
		'depends' => ['jquery']
	],
];

<?php
/**
 * Theme bootstrap file.
 */
Yii::app()->getComponent('bootstrap');

Yii::app()->getClientScript()->registerScript('baseUrl', "var baseUrl = '" . Yii::app()->getBaseUrl() . "'", CClientScript::POS_HEAD);

Yii::import('themes.default.DefautThemeEvents');

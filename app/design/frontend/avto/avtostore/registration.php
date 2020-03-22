<?php
/**
 *autostore default theme registration.
 *@author Ivan Havryliuk ivan.havryliuk95@gmail.com.
 *@copyright 2020 worzewolf.
*/

use \Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/avto/avtostore', __DIR__);

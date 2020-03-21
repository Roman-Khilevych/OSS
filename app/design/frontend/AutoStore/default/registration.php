<?php
/**
 * AvtoStore default theme registration
 *
 * @author Yuri Chlek yurichhlek@gmail.com
 * @copyright 2020 Chlek
 */

use \Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/AutoStore/default', __DIR__);

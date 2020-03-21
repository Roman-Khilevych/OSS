<?php
/**
 * TestJs default theme registration
 *
 * @author Yuri Chlek yurichhlek@gmail.com
 * @copyright 2020 Chlek
 */

use \Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/TestJs/default', __DIR__);

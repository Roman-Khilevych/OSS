<?php
/**
 *Chlek default theme registration
 *
 * @author Yuri Chlek yurichhlek@gmail.com
 * @copyright 2020 Chlek
 */

use \Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/LessClassWork/default', __DIR__);

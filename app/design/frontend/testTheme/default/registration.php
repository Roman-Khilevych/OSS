<?php
/**
 * Test Theme default theme registration
 *
 * @author Nikolaichuk Oleksandr nikolaychuk.alexander@gmail.com
 * @copyright 2020 Nikolaichuk
 */
use \Magento\Framework\Component\ComponentRegistrar;
ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/testTheme/default', __DIR__);

<?php
/**
 * Editorial default theme registration
 * @author Nikolaichuk Oleksandr nikolaychuk.alexander@gmail.com
 * @copyright 2020 Nikolaichuk
 */
use \Magento\Framework\Component\ComponentRegistrar;
ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/Editorial/default', __DIR__);

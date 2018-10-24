<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1238a56d4ae73f235a5f44bb6703e84d
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\Http\\Message\\' => 17,
            'PhpZip\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'PhpZip\\' => 
        array (
            0 => __DIR__ . '/..' . '/nelexa/zip/src/PhpZip',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1238a56d4ae73f235a5f44bb6703e84d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1238a56d4ae73f235a5f44bb6703e84d::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
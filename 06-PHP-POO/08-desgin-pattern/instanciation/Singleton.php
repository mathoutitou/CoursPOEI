<?php

/**
 * Cette classe gère le fait qu'elle ne peut pas être instanciée qu'une fois
 */
class SingletonDemo
{
    /**
     * On conserve dans un attribut static privé
     * la référence de l'instance (quand elle existe)
     *
     * Comme c'est static, c'est global, donc ça gère l'unicité
     */
    private static $instance;

    /**
     * On bloque l'accès au constructeur
     */
    private function __construct() {}

    /**
     * exemple de méthode donnant l'accès à l'instance
     */
    public static function getInstance()
    {
       if (!self::$instance) {
           self::$instance = new self();
       }

       return self::$instance;
    }
}
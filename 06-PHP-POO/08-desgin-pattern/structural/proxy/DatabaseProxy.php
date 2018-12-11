<?php

/**
 * Un proxy sert à accéder aux fonctionnalités d'un autre objet
 * en ajoutant une fonctionnalité supplémentaire
 *
 * @example : contrôle d'accès, mémoire cache, debug, autre...
 */

class DatabaseProxy
{
    private $localCache = [];
    private $database;

    /**
     * D'une manière ou l'autre, le proxy sert d'intermédiaire vers un objet tiers
     * dont il possède la référence
     */

    public function __construct(DatabaseConnection $database)
    {
        $this->database = $database;
    }

    /**
     * @example de fonctionnalité supplémentaire, stocker en cache PHP
     * une donnée venant de la base
     */

    public function loadArticle(int $id)
    {
        if (!isset($this->localCache[$id])){
            $this->localCache[$id] = $this->database->load($id);
        }

        return $this->localCache[$id];
    }
}
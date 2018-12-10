<?php

class FormBuilder
{
    private $fields = [];

    /**
     * Exemple de méthode pour décrire pas à pas
     * la construction de l'instance désirée
     */

    public function addField(string $type)
    {
        $this->fields[] = $type;
    }

    /**
     * @example de méthode pour récupérer le résultat final,
     * ie l'instance bâtie
     */
    public function getForm(): Form
    {
        return new Form($this->fields);
    }
}
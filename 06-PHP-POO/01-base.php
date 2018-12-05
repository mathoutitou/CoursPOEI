<?php

/**
 * Définition de la classe
 *
 * 2 parties:
 *  * en-tête en 1er
 *  * corps entre accolades
 *
 * convention d'écriture :
 *  * nom en PascalCase (majuscules début de chaque mois)
 *  * accolades sur nouvelle ligne
 */

class JsonSerializer
{
    public function serialize()
    {
        return "la donnée\n"; // \n pour sauter une ligne
    }

    public function unserialize()
    {
        return ["data" => "la donnée"];
    }
}


/**
 * instanciation de la classe dans une variable (création d'une variable)
 */

$serializer = new JsonSerializer();

echo $serializer->serialize();
$serializer->unserialize();
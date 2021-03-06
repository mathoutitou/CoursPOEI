<?php

namespace POE\database;


class CharacterFactory
{
    const TYPES = [
        'warrior' => [
            'life' => 200,
            'energy' => 100,
            'attack' => 25,
            'defense' => 20,
        ],
        'thief' => [
            'life' => 150,
            'energy' => 120,
            'attack' => 20,
            'defense' => 30,
        ],
        'wizard' => [
            'life' => 100,
            'energy' => 200,
            'attack' => 15,
            'defense' => 10,
        ],
    ];

    public function generate(string $name, string $type): Character
    {

        /**
         * Détection d'une situation inhabituelle.
         * Si le type de personnage est non connu, le générateur n'est pas capable
         * de créer le nouvel objet.
         * On "lance une exception" (ou "lève une exception) qui interromp
         * l'exécution de la méthode en cours et romonte d'un niveau dans la pile d'appel.
         * (throw permet d'interrompre)
         */
        if (!key_exists($type, self::TYPES)) {
            throw new \Exception('Type of character ' . $type . ' does not exist');
        }

        $character = new Character();
        $character->setName($name);

        $character->setMaxLife(self::TYPES[$type]['life']);
        $character->setCurrentLife(self::TYPES[$type]['life']);
        $character->setMaxEnergy(self::TYPES[$type]['energy']);
        $character->setCurrentEnergy(self::TYPES[$type]['energy']);
        $character->setAttack(self::TYPES[$type]['attack']);
        $character->setDefense(self::TYPES[$type]['defense']);

        return $character;
    }
}
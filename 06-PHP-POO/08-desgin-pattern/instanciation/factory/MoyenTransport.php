<?php

/**
 * L'interface définit une sorte de "contrat"
 *
 * Les en-têtes de méthodes devront être respectées par les classes
 * qui implémentent cette interface (nom, tyês de paramètres, type de retour)
 *
 * Ca permet d'isoler le développement de l'implémentation d'une part
 * et celui de l'utilisation d'autre part.
 *
 * Et de fait : changer d'implémentation, sans avoir à changer d'utilisation!
 */
interface MoyenTransport
{
    public function seDeplacer($adresseDepart, $adresseArrivee);
}
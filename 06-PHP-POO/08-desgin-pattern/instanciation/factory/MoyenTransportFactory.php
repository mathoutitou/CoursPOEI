<?php

/**
 * On délègue à la fabrique la gestion d'une instance d'un moyen de transport
 * sans que l'utilisateur ait besoin de savoir quelle est la classe implémentée
 *
 * Et ainsi, pas de nécessité de connaître comment se construit l'instance
 */
class MoyenTransportFactory
{
    public function createMoyenTransport(): MoyenTransport
    {
        return new Tram();
    }
}
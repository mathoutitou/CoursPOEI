<?php
/**
 * Created by PhpStorm.
 * User: stagiaire
 * Date: 06/12/18
 * Time: 14:04
 */

namespace POE\database;

class Connection{
    private $connection;

    public function __construct()
    {
        $this->connection = new \PDO('mysql:dbname=dungeon;host=localhost', 'mathilde', 'dawan');
    }

    public function getConnection()
    {
        return $this->connection;
    }


}
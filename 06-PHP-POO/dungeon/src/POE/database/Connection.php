<?php
/**
 * Created by PhpStorm.
 * User: stagiaire
 * Date: 06/12/18
 * Time: 14:04
 */

namespace POE\database;

class Connection
{
    protected $connection;

    public function __construct()
    {
        $this->connection = new \PDO('mysql:dbname=dungeon;host=localhost', 'mathilde', 'dawan');
        $this->connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
    }
}
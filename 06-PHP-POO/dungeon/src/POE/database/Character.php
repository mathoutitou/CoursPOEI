<?php

namespace POE\database;

class Character
{
    private $id;
    private $name;
    private $life_max;
    private $life_current;
    private $energy_max;
    private $energy_current;
    private $attack;
    private $defense;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getMaxLife()
    {
        return $this->life_max;
    }

    /**
     * @param mixed $life_max
     */
    public function setMaxLife($life_max)
    {
        $this->life_max = $life_max;
    }

    /**
     * @return mixed
     */
    public function getCurrentLife()
    {
        return $this->life_current;
    }

    /**
     * @param mixed $life_current
     */
    public function setCurrentLife($life_current)
    {
        $this->life_current = $life_current;
    }

    /**
     * @return mixed
     */
    public function getMaxEnergy()
    {
        return $this->energy_max;
    }

    /**
     * @param mixed $energy_max
     */
    public function setMaxEnergy($energy_max)
    {
        $this->energy_max = $energy_max;
    }

    /**
     * @return mixed
     */
    public function getCurrentEnergy()
    {
        return $this->energy_current;
    }

    /**
     * @param mixed $energy_current
     */
    public function setCurrentEnergy($energy_current)
    {
        $this->energy_current = $energy_current;
    }

    /**
     * @return mixed
     */
    public function getAttack()
    {
        return $this->attack;
    }

    /**
     * @param mixed $attack
     */
    public function setAttack($attack)
    {
        $this->attack = $attack;
    }

    /**
     * @return mixed
     */
    public function getDefense()
    {
        return $this->defense;
    }

    /**
     * @param mixed $defense
     */
    public function setDefense($defense)
    {
        $this->defense = $defense;
    }


}

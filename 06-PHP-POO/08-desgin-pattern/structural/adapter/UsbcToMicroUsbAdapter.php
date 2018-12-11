<?php

/**
 * Notre objet adaptateur se comporte comme un objet USB-C,
 * mais en interne, il utilise en réalité un objet Micro-USB
 */

class UsbcToMicroUsbAdapter implements UsbcInterface
{
    private $microUsbObject;

    public function __construct(MicroUsbInterface $charger)
    {
        $this->microUsbObject = $charger;
    }

    public function charger()
    {
        $this->microUsbObject->recharger();
    }
}
<?php

$builder = new FormBuilder();

// imaginons traitement depuis un code métier
$builder->add('text');
$builder->add('select');

// ensuite, ajout depuis un autre code
$builder->add('number');

// à la fin, on récupère l'ensemble
$form = $builder->getForm();

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dungeon</title>
</head>
<body>
    
    <h1> <?= $character->getName() ?> </h1>

    <div>
        Point de vie:
        <progress max="<?= $character->getMaxLife()?>" value="<?= $character->getCurrentLife()?>">
            <?= $character->getCurrentLife()?> / <?= $character->getMaxLife()?> PV
        </progress>
    </div>
    <div>
        Energie:
        <progress max="<?= $character->getMaxEnergy()?>" value="<?= $character->getCurrentEnergy()?>">
            <?= $character->getCurrentEnergy()?> / <?= $character->getMaxEnergy()?> PM
        </progress>
    </div>
    <div>
        Combat : <br>
        attaque : <?= $character->getAttack()?> <br>
        defense : <?= $character->getDefense()?>
    </div>

</body>
</html>
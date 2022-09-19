<?php
$motDePasse = "#LeSuperMotDepasse";

$param = [  'salt' => "rlFRabUf1IgCfgfSfsqn",'cost' => 8];

$crypt = password_hash($motDePasse,  PASSWORD_BCRYPT);

var_dump($crypt);

?>


<form action=""  method="POST">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="mdp"><br>

<button>tester</button>

</form>

<?php

    $saisie = $_POST['mdp'] ;
    var_dump($saisie);
    var_dump(password_verify($saisie, $crypt));

    if (password_verify($saisie, $crypt) == TRUE)
        echo 'Le mdp est ok, vous pouvez entrer';
    else 
        echo 'le mot de passe est erronée, vous pouvez sortir';

?>
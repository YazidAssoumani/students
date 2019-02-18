<?php

if (isset($_GET['prenom'])) {
    function getStudents() {
        $prenom = $_GET['prenom'];
        
        $connec = new PDO("mysql:dbname=ajax", 'root', '0000');
        $connec->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $request = $connec->prepare("SELECT nom, prenom 
                                    FROM students
                                    WHERE prenom LIKE '%$prenom%';");
        $request->execute();
        return $request->fetchAll(PDO::FETCH_ASSOC);
    }

    $students = getStudents();

    foreach ($students as $key => $student) {
        echo $student['nom'].' '.$student['prenom'].'<br />';
    }
}

?>


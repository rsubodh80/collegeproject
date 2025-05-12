<?php 
function validate($val){
    $validateValue=handleTrim($val);
    $validateValue=sanitize($validateValue);
    $validateValue=handleSlashes($validateValue);
    return $validateValue;
}

function handleTrim($val){
    $sanitizedVal=trim($val);
    return $sanitizedVal;
}
function sanitize($val){
    $sanitizedVal=htmlspecialchars($val);
    return $sanitizedVal;
} 

function handleSlashes($val){
    $sanitizedVal=stripslashes($val);
    return $sanitizedVal;
}
if($_SERVER['REQUEST_METHOD']=="POST")
{
    $first_name=validate($_POST['fName']);
    $last_name=validate($_POST['lName']);
    $age=validate($_POST['age']);
    $roll=validate($_POST['roll']);
    
    
    // PHP MYSQL CONNECTION 
    //$servername,$username,$password
    $connection=new mysqli('localhost',"root","");
    if($connection->connect_error){
        die('Connection Failed!!!');
    }
    else{
        echo "Connection successful";
    }
    //DB CREATION
    $sql = 'CREATE DATABASE IF NOT EXISTS test';
    if($connection->query($sql) == true){
        echo "DATABASE CREATED SUCCESSFULLY!!";
    }
    else{
        echo "FAILED TO CREATE DATABASE!!";
    }
     //mysql config to create table
     $connection1 = new mysqli('localhost', 'root', '',"test" );//test is db 
     //creating new table inside a db
     $table_sql = "CREATE TABLE IF NOT EXISTS students (
         id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
         fName VARCHAR(30) NOT NULL,
         lName VARCHAR(30) NOT NULL,
         roll VARCHAR(10),
         age INT(10)
         )";
    if($connection1->query($table_sql) == true){
            $addition_sql=" INSERT INTO students (fName,lName,roll,age) VALUES ('$first_name','$last_name','$roll','$age')";
            if($connection1->query($addition_sql) == true){
                echo "VALUES ADDED TO TABLE students";
            }
    }
    else{
            echo "FAILED TO CREATE TABLE!!";
    }
}
elseif($_SERVER['REQUEST_METHOD']=="GET"){
    $id=$_GET['id'];
    $connection=new mysqli('localhost',"root","","test");
    if($connection->connect_error){
        die('Connection Failed!!!');
    }
    else{
        $sql = "SELECT fName,lName,age,roll from students WHERE id=$id";
        $update_sql="UPDATE students SET fName=Hari,lName=Sth WHERE id=$id";
        $result = $connection->query($sql);
        $parsed_result = $result->fetch_assoc();
        echo $parsed_result['fName']."<br/>";
        echo $parsed_result['lName']."<br/>";
        echo $parsed_result['roll']."<br/>";
        echo $parsed_result['age']."<br/>";
    }
 
}
    
?>
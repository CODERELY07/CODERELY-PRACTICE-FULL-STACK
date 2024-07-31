<?php

    define("SERVER_NAME", 'localhost');
    define("USERNAME", 'root');
    define("PASSWORD", '');
    define("DB_NAME", 'student');
    
    $conn =  new mysqli(SERVER_NAME,USERNAME,PASSWORD,DB_NAME);

    if($conn->connect_error){
        // echo "Connection failed " . $conn->error;
    }else{
        // echo "Success";
    }

    $signupbtn = htmlspecialchars($_POST['signupbtn']);

    if($_SERVER["REQUEST_METHOD"] === "POST" && isset($signupbtn)){
        $email = htmlspecialchars($_POST['email']);
        $password = htmlspecialchars($_POST['password']);

        if($email == '' || $password == ''){
            echo "Please input the blank!";
        }else{
            $stmt = $conn->prepare("INSERT INTO accounts(email,password) VALUES(?,?)");
            $stmt->bind_param("ss", $email,$password);

            if($stmt->execute()){
                echo 1;
            }else{
                echo 0;
            }
        }
    }else{
        echo "No Data Received";
    }
    $stmt->close();
    $conn->close();
    
    

?>
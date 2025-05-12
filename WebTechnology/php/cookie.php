
<html>
<head>
  
</head>
<body>
    <?php
    setcookie("fName","ram",time()+86400*30);
    echo $_COOKIE('fName');
</body>
</html>
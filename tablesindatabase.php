
<?php 
include('mysqlconnection.php'); 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli($db_address, $db_username, $db_password, $db_databasename);

$result = $conn->query("SHOW TABLES in ".$db_databasename);

$outp = "";
while($rs = mysqli_fetch_array($result)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"tablename":"'. $rs[0]     . '"}';
   
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
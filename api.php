<?php
header('Access-Control-Allow-Prigin: *');
header('Content-type: application/json');

require_once('db_connect.php');

$sql = "SELECT * FROM produkte";
$result = $conn->query($sql);

if($result->num_rows > 0) {
    while($row = $result->fetch-assoc()) {
        $data[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($data);
?>
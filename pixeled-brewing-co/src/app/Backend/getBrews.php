<?php
include 'db.php';
$result = $db->query('SELECT * FROM BEER');
//Initialize array variable
$dbdata = array();

//Fetch into associative array
  while ( $row = $result->fetch_assoc())  {
	$dbdata[]=$row;
  }

//Print array in JSON format
 echo json_encode($dbdata);
//print(json_encode(pg_fetch_all($result)));
?>
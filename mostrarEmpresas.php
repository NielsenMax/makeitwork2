<?php 
/*
require_once "config.php";

header("Content-Type: application/json; charset=UTF-8");


$resp=$mysqli->query("select * from empresas;");
$x= Array(Array());
$c=0;
while($i=$resp->fetch_row()){
    $x[$c]=$i;
    $c++;
}
echo json_encode($x);*/

include("config.php");
//mysqli_select_db("samples",$con);
$result=$mysqli->query("select * from empresas;");



echo "<table border='1' >
<tr>
<td > <b>Id</b></td>
<td ><b>IdOwner</b></td>
<td ><b>Name</b></td>
";

while($data = mysqli_fetch_row($result))
{   

    echo "<tr class=pito>";
    echo "<td >$data[0]</td>";
    echo "<td>$data[1]</td>";
    echo "<td >$data[2]</td>";
   
    echo "</tr>";
}
echo "</table>";

?>
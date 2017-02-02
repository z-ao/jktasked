<?php 
   header("Content-type:application/json;charset=utf-8");

    $con = mysql_connect("localhost","root","");
    if (!$con) {
    	printf(mysql_error());
    }else{
        mysql_select_db("newbaidu", $con);

    	mysql_query('set names "utf8"');

    	$query = mysql_query("SELECT * FROM `newfrom`");
        $newfrom = [];

        while ($row = mysql_fetch_array($query)) {

            array_push($newfrom, array("newtitle"=>$row['newtitle'], "newimg"=>$row['newimg'], "id"=>$row['id'], "newoption"=>$row['newoption'], "newcontent"=>$row['newcontent'], "newtime"=>$row['newtime'],));
        };

        $result = array('errno' => 0, 'newfrom' => $newfrom); 

        echo json_encode($result);
    };

    mysql_close($con);

?>
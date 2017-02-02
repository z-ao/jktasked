<?php 

   header("Content-type:application/json;charset=utf-8");

    $con = mysql_connect("localhost","root","");
   if (!$con) {
    	printf(mysql_error());
    }else{

    	mysql_query('set names "utf8"');
    	mysql_select_db("newbaidu", $con);

        @$delete = $_REQUEST['delete'];

    	$select = mysql_query("DELETE FROM `newfrom` WHERE `id` = '".$delete."'");

        echo json_encode($result);
    }
?>
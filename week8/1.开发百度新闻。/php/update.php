<?php 
   header("Content-type:application/json;charset=utf-8");

    $con = mysql_connect("localhost","root","");
   if (!$con) {
    	printf(mysql_error());
    }else{

    	mysql_query('set names "utf8"');
    	mysql_select_db("newbaidu", $con);

        @$utitle = $_REQUEST['utitle'];
        @$uimg = $_REQUEST['uimg'];
        @$ucontent = $_REQUEST['ucontent'];
        @$utime = $_REQUEST['utime'];
        @$utype = $_REQUEST['utype'];
        @$uid = $_REQUEST['uid'];

    	$result = mysql_query("UPDATE `newfrom` SET `id`= '".$uid."' ,`newtitle`= '".$utitle."' ,`newoption`= '".$utype."',`newimg`= '".$uimg."',`newcontent`=  '".$ucontent."',`newtime`= '".$utime."' WHERE `id` = '".$uid."' ");                   

        echo json_encode($result);

    }
?>
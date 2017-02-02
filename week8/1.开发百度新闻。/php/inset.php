<?php 
    header("Content-type:application/json;charset=utf-8");

    $con = mysql_connect("localhost","root","");

    if (!$con) {
   	    die('Could not connect:' .mysql_error());
    } else {
   	    mysql_select_db("newbaidu",$con);

        mysql_query("set names 'utf8'");

   	    @$addtitle = $_REQUEST['addtitle'];
   	    @$addimg = $_REQUEST['addimg'];
   	    @$addcontent = $_REQUEST['addcontent'];
   	    @$addtime = $_REQUEST['addtime'];
        @$addtype = $_REQUEST['addtype'];

        //addform
        $inset ="INSERT INTO `newfrom` (`newtitle`, `newoption`, `newimg`, `newcontent`, `newtime` ) VALUES('".$addtitle."', '".$addtype."', '".$addimg."','".$addcontent."','".$addtime."')"; 
        $result = mysql_query($inset); 

        echo json_encode($result);    
    };

mysql_close($con);

?>
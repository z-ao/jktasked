

    $.ajax({
        url: 'php/query.php',
        type: 'GET',
        dataType: 'json',

        success : function (response) {
                 
            var res = response.newfrom;

            var jinxuan = Array();
            var baijia = Array();
            var bendi = Array();
            var pic = Array();
            var yule = Array();
            var shehui = Array();
            var jushi = Array();
            var male = Array();
            var hulianwang = Array();

            $.each(res,function (index) {
                if (this.newoption == "精选") {
                    jinxuan.push(this);

                } else if (this.newoption == "百家") {
                    baijia.push(this);

                } else if (this.newoption == "本地") {
                    bendi.push(this);

                } else if (this.newoption == "图片") {
                    pic.push(this);

                } else if (this.newoption == "娱乐") {
                    yule.push(this);

                } else if (this.newoption == "社会") {
                    shehui.push(this);

                } else if (this.newoption == "军事") {
                    jushi.push(this);

                } else if (this.newoption == "女人") {
                    male.push(this);

                } else if (this.newoption == "互联网") {
                    hulianwang.push(this);

                } else {
                    return false;
                }
            })

            $.each(jinxuan, function (index) {
                var div = "<div></div>";
                $("#home").append(div);
                $("#home > div").attr("class", "section");

                var ptitle = "<p></p>";
                $("#home > div").eq(index).append(ptitle);
                $("#home > div > p").eq(0).attr("class", "title");
                $("#home .title").eq(0).text(this.newtitle);

                var divchild = "<div></div>";
                $("#home > div").eq(index).append(divchild);
                $(".section > div").attr("class", "child");

                var img = '<img>';
                $("#home .child").eq(index).append(img);
                $("#home .child > img").eq(index).attr("src", this.newimg);

                var section = "<section></section>";
                $("#home .child").eq(index).append(section);
                $("#home .child > section").eq(index).text(this.newcontent);

                var ptime = "<p></p>";
                $("#home > div").eq(index).append(ptime);
                $("#home > div > p").eq(1).attr("class", "time");
                $(".section > .time").eq(index).text(this.newtime);
            });

            $.each(baijia, function (index) {
                var div = "<div></div>";
                $("#baijia").append(div);
                $("#baijia > div").attr("class", "section");

                var ptitle = "<p></p>";
                $("#baijia > div").eq(index).append(ptitle);
                $("#baijia > div > p").eq(0).attr("class", "title");
                $("#baijia .title").eq(0).text(this.newtitle);

                var divchild = "<div></div>";
                $("#baijia > div").eq(index).append(divchild);
                $(".section > div").attr("class", "child");

                var img = '<img>';
                $("#baijia .child").eq(index).append(img);
                $("#baijia .child > img").eq(index).attr("src", this.newimg);

                var section = "<section></section>";
                $("#baijia .child").eq(index).append(section);
                $("#baijia .child > section").eq(index).text(this.newcontent);

                var ptime = "<p></p>";
                $("#baijia > div").eq(index).append(ptime);
                $("#baijia > div > p").eq(1).attr("class", "time");
                $(".section > .time").eq(index).text(this.newtime);
            });

            $.each(bendi, function (index) {
                var div = "<div></div>";
                $("#bendi").append(div);
                $("#bendi > div").attr("class", "section");

                var ptitle = "<p></p>";
                $("#bendi > div").eq(index).append(ptitle);
                $("#bendi > div > p").eq(0).attr("class", "title");
                $("#bendi .title").eq(0).text(this.newtitle);

                var divchild = "<div></div>";
                $("#bendi > div").eq(index).append(divchild);
                $(".section > div").attr("class", "child");

                var img = '<img>';
                $("#bendi .child").eq(index).append(img);
                $("#bendi .child > img").eq(index).attr("src", this.newimg);

                var section = "<section></section>";
                $("#bendi .child").eq(index).append(section);
                $("#bendi .child > section").eq(index).text(this.newcontent);

                var ptime = "<p></p>";
                $("#bendi > div").eq(index).append(ptime);
                $("#bendi > div > p").eq(1).attr("class", "time");
                $(".section > .time").eq(index).text(this.newtime);
            });

            $.each(pic, function (index) {
                var div = "<div></div>";
                $("#pic").append(div);
                $("#pic > div").attr("class", "section");

                var ptitle = "<p></p>";
                $("#pic > div").eq(index).append(ptitle);
                $("#pic > div > p").eq(0).attr("class", "title");
                $("#pic .title").eq(0).text(this.newtitle);

                var divchild = "<div></div>";
                $("#pic > div").eq(index).append(divchild);
                $(".section > div").attr("class", "child");

                var img = '<img>';
                $("#pic .child").eq(index).append(img);
                $("#pic .child > img").eq(index).attr("src", this.newimg);

                var section = "<section></section>";
                $("#pic .child").eq(index).append(section);
                $("#pic .child > section").eq(index).text(this.newcontent);

                var ptime = "<p></p>";
                $("#pic > div").eq(index).append(ptime);
                $("#pic > div > p").eq(1).attr("class", "time");
                $(".section > .time").eq(index).text(this.newtime);
            });

            $.each(yule, function (index) {
                var div = "<div></div>";
                $("#yule").append(div);
                $("#yule > div").attr("class", "section");

                var ptitle = "<p></p>";
                $("#yule > div").eq(index).append(ptitle);
                $("#yule > div > p").eq(0).attr("class", "title");
                $("#yule .title").eq(0).text(this.newtitle);

                var divchild = "<div></div>";
                $("#yule > div").eq(index).append(divchild);
                $(".section > div").attr("class", "child");

                var img = '<img>';
                $("#yule .child").eq(index).append(img);
                $("#yule .child > img").eq(index).attr("src", this.newimg);

                var section = "<section></section>";
                $("#yule .child").eq(index).append(section);
                $("#yule .child > section").eq(index).text(this.newcontent);

                var ptime = "<p></p>";
                $("#yule > div").eq(index).append(ptime);
                $("#yule > div > p").eq(1).attr("class", "time");
                $(".section > .time").eq(index).text(this.newtime);
            });

            $.each(shehui, function (index) {
                var div = "<div></div>";
                $("#shehui").append(div);
                $("#shehui > div").attr("class", "section");

                var ptitle = "<p></p>";
                $("#shehui > div").eq(index).append(ptitle);
                $("#shehui > div > p").eq(0).attr("class", "title");
                $("#shehui .title").eq(0).text(this.newtitle);

                var divchild = "<div></div>";
                $("#shehui > div").eq(index).append(divchild);
                $(".section > div").attr("class", "child");

                var img = '<img>';
                $("#shehui .child").eq(index).append(img);
                $("#shehui .child > img").eq(index).attr("src", this.newimg);

                var section = "<section></section>";
                $("#shehui .child").eq(index).append(section);
                $("#shehui .child > section").eq(index).text(this.newcontent);

                var ptime = "<p></p>";
                $("#shehui > div").eq(index).append(ptime);
                $("#shehui > div > p").eq(1).attr("class", "time");
                $(".section > .time").eq(index).text(this.newtime);
            });

            $.each(jushi, function (index) {
                var div = "<div></div>";
                $("#jushi").append(div);
                $("#jushi > div").attr("class", "section");

                var ptitle = "<p></p>";
                $("#jushi > div").eq(index).append(ptitle);
                $("#jushi > div > p").eq(0).attr("class", "title");
                $("#jushi .title").eq(0).text(this.newtitle);

                var divchild = "<div></div>";
                $("#jushi > div").eq(index).append(divchild);
                $(".section > div").attr("class", "child");

                var img = '<img>';
                $("#jushi .child").eq(index).append(img);
                $("#jushi .child > img").eq(index).attr("src", this.newimg);

                var section = "<section></section>";
                $("#jushi .child").eq(index).append(section);
                $("#jushi .child > section").eq(index).text(this.newcontent);

                var ptime = "<p></p>";
                $("#jushi > div").eq(index).append(ptime);
                $("#jushi > div > p").eq(1).attr("class", "time");
                $(".section > .time").eq(index).text(this.newtime);
            });

            $.each(male, function (index) {
                var div = "<div></div>";
                $("#male").append(div);
                $("#male > div").attr("class", "section");

                var ptitle = "<p></p>";
                $("#male > div").eq(index).append(ptitle);
                $("#male > div > p").eq(0).attr("class", "title");
                $("#male .title").eq(0).text(this.newtitle);

                var divchild = "<div></div>";
                $("#male > div").eq(index).append(divchild);
                $(".section > div").attr("class", "child");

                var img = '<img>';
                $("#male .child").eq(index).append(img);
                $("#male .child > img").eq(index).attr("src", this.newimg);

                var section = "<section></section>";
                $("#male .child").eq(index).append(section);
                $("#male .child > section").eq(index).text(this.newcontent);

                var ptime = "<p></p>";
                $("#male > div").eq(index).append(ptime);
                $("#male > div > p").eq(1).attr("class", "time");
                $(".section > .time").eq(index).text(this.newtime);
            });

            $.each(hulianwang, function (index) {
                var div = "<div></div>";
                $("#hulianwang").append(div);
                $("#hulianwang > div").attr("class", "section");

                var ptitle = "<p></p>";
                $("#hulianwang > div").eq(index).append(ptitle);
                $("#hulianwang > div > p").eq(0).attr("class", "title");
                $("#hulianwang .title").eq(0).text(this.newtitle);

                var divchild = "<div></div>";
                $("#hulianwang > div").eq(index).append(divchild);
                $(".section > div").attr("class", "child");

                var img = '<img>';
                $("#hulianwang .child").eq(index).append(img);
                $("#hulianwang .child > img").eq(index).attr("src", this.newimg);

                var section = "<section></section>";
                $("#hulianwang .child").eq(index).append(section);
                $("#hulianwang .child > section").eq(index).text(this.newcontent);

                var ptime = "<p></p>";
                $("#hulianwang > div").eq(index).append(ptime);
                $("#hulianwang > div > p").eq(1).attr("class", "time");
                $(".section > .time").eq(index).text(this.newtime);
            });
        }
    });


var user = {
    init: function () {
        this.build();
    },
    build: function () {
        this.query();
    },
    query: function () {
        $('document').ready(function () {
            $.ajax({
                url: 'query',
                type: 'GET',
                dataType: 'json',

                success : function (response) {

                    if (response.errno === 0) {
                        var res = response.newfrom;

                        $.each(res,function (index) {
                            var tr ='<tr></tr>';
                            $('#newstable tbody').append(tr);


                            var td = '<td></td>';
                            $('tbody tr').eq(index).append(td);
                            $('tbody tr').eq(index).append(td);
                            $('tbody tr').eq(index).append(td);
                            $('tbody tr').eq(index).append(td);
                            $('tbody tr').eq(index).append(td);
                            $('tbody tr').eq(index).append(td);

                            $('tbody tr').eq(index).children("td").attr("class", index);

                            $('.' + index).eq(0).text(this.id);

                            $('.' + index).eq(1).text(this.newoption);

                            $('.' + index).eq(2).text(this.newtitle);

                            $('.' + index).eq(3).text(this.newimg);

                            $('.' + index).eq(4).text(this.newcontent);

                            $('.' + index).eq(5).text(this.newtime);
                        })                      
                    }
                }
            });
        })      
    }
}


user.init();



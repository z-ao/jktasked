

var user = {
	init: function () {
		this.build();
	},
	build: function () {
		this.add();
		this.del();
		this.update();
		this.query();
	},
	add: function () {
		$('#addsub').click(function () {
			$.ajax({
				url: 'php/inset.php',
				type: 'GET',

				data:{
					addtitle: $('#addtitle').val(),
					addimg: $('#addimg').val(),
					addcontent: $('#addcontent').val(),
					addtime: $('#addtime').val(),
					addtype: $('#addtype').val()
				},

				success: function (response) {
					console.log(response);
				}
			})
		})		
	},
	del: function () {
		$('#del').click(function () {
			$.ajax({
				url: 'php/delete.php',
				type: 'GET',

				data:{
					delete: $('#delete').val()
				},

				success: function (response) {
					console.log(response);
				}
			})
		})		
	},
	update: function () {
		$('#update').click(function () {
			$.ajax({
				url: 'php/update.php',
				type: 'GET',

				data:{
					utitle: $('#utitle').val(),
					uimg: $('#uimg').val(),
					ucontent: $('#ucontent').val(),
					utime: $('#utime').val(),
					utype: $('#utype').val(),
					uid: $('#uid').val()
				},

				success: function (response) {
					console.log(response);
				}
			})
		})		
	},
	query: function () {
		$('document').ready(function () {
			$.ajax({
			    url: 'php/query.php',
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



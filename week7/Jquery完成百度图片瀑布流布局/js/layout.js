
function waterfall() {
   	var pbox = $('#parent > div');
   	var w = pbox.eq(0).outerWidth();
   	var col = Math.floor($(window).width()/w);
   
   	var arrH = [];

    pbox.each (function (index,value) {
   	    var h = pbox.eq(index).outerHeight();            

   	    if (index < col) {
   	        arrH[index] = h;
   	    }else{ 	   	        	
   	        minH = Math.min.apply(null,arrH);
   	        minIndex = $.inArray(minH,arrH);

   	        $(value).css(
   	        		{'position':'absolute',
   	        		'top': minH ,
   	        		'left':w*minIndex   +'px'
   	        		}
	   	            ); 
            arrH[minIndex] = pbox.eq(index).outerHeight() + arrH[minIndex];
   	    };
   })  
}


$("document").ready(function () {	
	waterfall();
	var dataint = {
		data : [{'src':'c.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=cb0609ba6709c93d07a706f3aa0dd4ea/4a36acaf2edda3cc7ec8fb9401e93901213f9251.jpg'},{'src':'img.nextcar.cn/picture/2014_10_28/d73019a20bf75a7c44d7d5c9f93a7885.jpg'},{'src':'img1.gtimg.com/5/500/50087/5008738_980x1200_0.jpg'},{'src':'pic.58pic.com/58pic/16/63/25/55q58PICGZz_1024.jpg'},{'src':'imgsrc.baidu.com/forum/w%3D580/sign=c7cdcbb18744ebf86d716437e9f8d736/d4f38544ebf81a4cfda21e7bd72a6059242da635.jpg'}]
	};
    window.onscroll = function () {
		    if (check()) {
		    	$.each(dataint.data,function (index,value) {    	
		    	var boxn = $('<div>').addClass('con').appendTo($('#parent') );
		        var ncen = $('<div>').addClass('cencent').appendTo(boxn);
		        $('<img>').attr('src','http://' + $(value).attr('src')).appendTo(ncen);
    		    waterfall();		        
		    })
	    }
    }	
})


function check() {
	var conH =$('#parent > div');
	var boxH = conH.last().offset().top + Math.floor(conH.outerHeight()/2); 
	var scrollH = $(window).scrollTop();
	var windowtH = $(window).height();
	return(boxH < scrollH + windowtH ) ?true:false; 
}


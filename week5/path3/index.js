var but = document.getElementById('btn');
but.onclick = function() {
		
	var searchArray = document.getElementById('searchArray');
	var array = document.getElementById('array').value.split(",");
    var arrsort = document.getElementById('array').value.split(",").sort();
	
	var arrnum = 1;
    var numstore = 1;

    var arrval = [];
    var arrindex = [];

	for (var i = 0; i < array.length; i++) {
		if (arrsort[i] === arrsort[i-1]) {    				
			numstore += 1;
		} else {
            numstore = 1;
        }

        if (numstore > arrnum) {
            arrnum = numstore;
            arrval = arrsort[i];
        }
	}

    for (var i = 0; i < array.length; i++) {
        if (array[i] === arrval) {
            arrindex.push(i);
        }
    }

    searchArray.innerHTML =  "value:" + arrval + "<br>" + "count:" + arrnum + "<br>" + "in:" + arrindex;
}
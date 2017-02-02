var index = {
	init: function () {
		this.bulid()
	},
	bulid: function () {
		this.computed()
	},
	computed: function () {

		var numArr = document.getElementById('num').getElementsByTagName('input');
		var data = document.getElementById('result');		
		var txt = document.getElementById('txt');

		var numStore = '';
		for (var a = 0; a < numArr.length ; a++) {

			numArr[a].onclick = function () {
				numStore = numStore + this.value;
				data.innerText = numStore;
			}
		};

	    var computed = document.getElementById('base').getElementsByTagName('input');

		var method = '';
		var result = '';


		for (var b =  0; b < computed.length; b++) {
	
			computed[b].onclick = function () {
		        var index = this.value;
				if (index == 'AE') {
					result = 0;
					data.innerText = '';
			    }else if (index == '+' ) {
					computer();
				}else if (index == '-') {
					computer();
				}else if (index == '/') {
					if (numStore === '0') {
						txt.innerText = "Frstnumber null";
				        numStore = '';
					}else if (result !== 0) {
						computer();
					}
				}else{
					if (result !== '') {
						computer();
					}
				}
				numStore = '';
				method = index;			
			}
		}

		var highcon = document.getElementById('highcon').getElementsByTagName('input');
		for (var i = 0; i < highcon.length; i++) {
			highcon[i].onclick = function (index) {
				var index = this.value;
				if (index == 'sin') {
					result = parseFloat(Math.sin(numStore * Math.PI / 180).toFixed(8));
					data.innerText = result;
				}else if (index == 'cos') {
					result = parseFloat(Math.cos(numStore * Math.PI / 180).toFixed(8));
					data.innerText = result;
				}else if (index == 'tan') {
					result = parseFloat(Math.tan(numStore * Math.PI / 180).toFixed(8));
					data.innerText = result;
				}else{
					computer();
				}
			}
		}

		var computer = function () {
			if (result === '') {
				result = numStore;
				numStore = '';
				return false;
			}else{
				if (method == '+') {
					result = parseFloat(result) + parseFloat(numStore);
					data.innerText = result;
				}else if (method == '-') {
					result = parseFloat(result) - parseFloat(numStore);
					data.innerText = result; 
				}else if (method == '/') {
					result = parseFloat(result) / parseFloat(numStore);
					data.innerText = result;
				}else if (method == '*') {
					result = parseFloat(result) * parseFloat(numStore);
					data.innerText = result;
				}else{
					return false;
				}
			}
		};
	}
};

index.init();
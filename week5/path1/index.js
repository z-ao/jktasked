
function out() {
	var nums = document.getElementById('nums').value;
	var on = document.getElementById('on');

	if (nums <= 100 && nums > 90) {
		on.innerHTML = "一等生";
	} else if (nums <= 90 && nums > 80) {
		on.innerHTML = "二等生";
	} else if (nums <= 80 && nums > 70) {
		on.innerHTML = "三等生";
	} else if (nums <= 70 && nums > 60) {
		on.innerHTML = "四等生";
	}  else {
		on.innerHTML = "吊车尾";
	};
};
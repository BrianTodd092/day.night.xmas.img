var date = new Date();
var hour = date.getHours();
var month = date.getMonth();
var d = date.getDate();






// Order of if & else if, True Line, False Line.

window.onload = function attachEvent(){

if ( month === 11){

document.getElementById('x').style.display = 'block';
}

else if ( month === 0 && d < 7){

document.getElementById('x').style.display = 'block';
}

else if ( month !== 11  && hour > 6 && hour < 20) {

//document.getElementById('r').style.display = 'block';
document.getElementsByClassName("ddimg")[0].className = 'dimg';

}

else {

//document.getElementById('t').style.display = 'block';
document.getElementsByClassName("nnimg")[0].className = 'nimg';

}
}


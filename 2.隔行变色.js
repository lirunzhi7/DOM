
var box = document.getElementById('box')
var divs = box.getElementsByTagName('div')
var color = ['red','yellow']

for (var i = 0; i < divs.length; i++) {
    if(i%2===0){
        divs[i].ppp='yellow'
        divs[i].style.background='yellow'
    }else{
        divs[i].ppp='red'
        divs[i].style.background='red'
    }
}

//鼠标滑进和划出的效果忘记了
for (var i = 0; i < divs.length; i++) {
    divs[i].onmouseenter=function(){
        this.style.background='pink'
    }
    divs[i].onmouseleave=function(){
        this.style.background=this.ppp
    }
}
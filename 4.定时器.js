
var divs = document.getElementsByTagName('div')[0]
var str = '0123456789'
function fn(){
    var newstr = ''
    for (var i = 0; i < 4; i++) {
        var cur = Math.floor(Math.random()*10)
        if(newstr.indexOf(str[cur])===-1){
         newstr += str[cur]
        }else{
            i--
        }
    }
    return newstr
}
divs.innerText=fn()
var bott1 = document.createElement('button')
var bott2 = document.createElement('button')
bott1.innerText='开始'
bott2.innerText='结束'
var body = document.body
body.appendChild(bott1)
body.appendChild(bott2)
var time
bott1.onclick=function(){
    clearInterval(time)//节流与防抖
    time = setInterval(function(){
    divs.innerText=fn()
},100)
}
bott2.onclick=function(){
    clearInterval(time)
}
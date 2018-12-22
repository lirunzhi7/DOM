
var box = document.getElementById('box')
function fn(){
    var time1 = new Date('2018/12/7 18:52:00').getTime()
    var time2 = Date.now()
    var time = time1 - time2
    if(time<=0){
        clearInterval(newtime)
        return
    }
    var hours = Math.floor(time/(60*60*1000))
    var mins = Math.floor((time - hours*60*60*1000)/(60*1000));
    var soul =  Math.floor((time - hours*60*60*1000 - mins*60*1000)/1000);
    var scond = Math.floor((time - hours*60*60*1000 - mins*60*1000))
    box.innerHTML = f(hours) +':'+ f(mins) +':'+ f(soul) 
}
fn()
var newtime = setInterval(fn,1000)

function f(n){
    return n>=10 ? n:'0'+n
}

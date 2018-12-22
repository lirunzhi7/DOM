
// var box = document.getElementById('box')
// var list = box.getElementsByTagName('li')
// var divs =  box.getElementsByTagName('div')

//方法一

// for (var i = 0; i < list.length; i++) {
//     list[i].ppp=i
//     list[i].onclick=function(){
//         fn(this.ppp)
//     }
// }
// function fn(n){
//     for (var i = 0; i < list.length; i++) {
//         list[i].className = ''
//         divs[i].className = ''
//     }
//     list[n].className='activ'
//     divs[n].className='activ'
// }

// var box = document.getElementById('box')
// var list = box.getElementsByTagName('li')
// var divs =  box.getElementsByTagName('div')

// //方法二

// for (let i = 0; i < list.length; i++) {
//     list[i].onclick=function(){
//         fn(i)
//     }
// }
// function fn(n){
//     for (var i = 0; i < list.length; i++) {
//         list[i].className=divs[i].className=''
//     }
//     list[n].className=divs[n].className='activ'
// }

// var box = document.getElementById('box')
// var list = box.getElementsByTagName('li')
// var divs =  box.getElementsByTagName('div')

// //方法三
 
// for (var i = 0; i < list.length; i++) {
//     list[i].onclick=(function(n){
//         return function(){
//             for (var i = 0; i < list.length; i++) {
//                 list[i].className=divs[i].className=''
//             }
//             list[n].className='activ'
//             divs[n].className='activ'
//         }
//     })(i)
// }


//不清楚为什么没有引进来


var data;
var xhr = new XMLHttpRequest()
xhr.open('get','json/product.json',false)
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
        data=JSON.parse(xhr.responseText)
    }
}
xhr.send()
console.log(data)

// var data = [
//     {
//       "id": 1,
//       "title": "HUAWEI全网通版（亮黑色）",
//       "price": 499,
//       "time": "2017-03-15",
//       "hot": 198,
//       "img": "img/1.jpg"
//     },
//     {
//       "id": 2,
//       "title": "HUAWEI（曜石黑）",
//       "price": 129,
//       "time": "2017-02-08",
//       "hot": 25,
//       "img": "img/2.jpg"
//     },
//     {
//       "id": 3,
//       "title": "华为畅享7（香槟金）",
//       "price": 895,
//       "time": "2017-01-25",
//       "hot": 568,
//       "img": "img/3.jpg"
//     },
//     {
//       "id": 4,
//       "title": "HUAWEI全网通版（曜石黑）",
//       "price": 1895,
//       "time": "2016-12-30",
//       "hot": 20000,
//       "img": "img/4.jpg"
//     },
//     {
//       "id": 5,
//       "title": "HUAWEI全网通版（玫瑰金）",
//       "price": 3587,
//       "time": "2016-01-30",
//       "hot": 1032654,
//       "img": "img/5.jpg"
//     },
//     {
//       "id": 6,
//       "title": "华为畅享7（香槟金）",
//       "price": 992,
//       "time": "2018-01-01",
//       "hot": 1,
//       "img": "img/6.jpg"
//     },
//     {
//       "id": 7,
//       "title": "HUAWEI全网通版（樱语粉）",
//       "price": 564,
//       "time": "2017-02-19",
//       "hot": 400,
//       "img": "img/7.jpg"
//     },
//     {
//       "id": 8,
//       "title": "HUAWEI全网通版（曜石黑）",
//       "price": 420,
//       "time": "2017-01-25",
//       "hot": 240,
//       "img": "img/8.jpg"
//     },
//     {
//       "id": 9,
//       "title": "HUAWEI P10（钻雕金）",
//       "price": 12,
//       "time": "2014-01-01",
//       "hot": 12345678,
//       "img": "img/9.jpg"
//     },
//     {
//       "id": 10,
//       "title": "HUAWEI全网通版（曜石黑）",
//       "price": 420,
//       "time": "2017-01-25",
//       "hot": 240,
//       "img": "img/8.jpg"
//     }
//   ]
// var list = document.getElementById('list')
// var str = ``
// for (var i = 0; i < data.length; i++) {
//     var cur = data[i]
//     str +=` <li>
//     <img src="${cur.img}" alt="">
//     <span>${cur.title}</span>
//     <span>${cur.time}</span>
//     <span>${cur.hot}</span>
//     <span>${cur.price}</span>
// </li>`
// }
// list.innerHTML=str
// var a = document.getElementsByTagName('a')
// for (var i = 0; i < a.length; i++) {
//     a[i].ppp = i
//     a[i].flag=-1
//     a[i].onclick=function(){
//         this.flag=this.flag*(-1)
//         sort.call(this)
//     }
// }
// var lis = list.getElementsByTagName('li')
// var newlist = Array.prototype.slice.call(lis)

// function sort(){
//     var that =  this
//         data.sort(function(a,b){
//         if(that.ppp===1){
//             var first = a.hot
//             var second = b.hot
//         }else if(that.ppp===2){
//             var first = a.price
//             var second = b.price
//         }else{
//             var first = a.time.replace('-','').replace('-','')
//             var second = b.time.replace('-','').replace('-','')
//         }
//         return first - second*(that.flag)
//     })
//     var str = ``
//     for (var i = 0; i < data.length; i++) {
//         var cur = data[i]
//         str +=` <li>
//         <img src="${cur.img}" alt="">
//         <span>${cur.title}</span>
//         <span>${cur.time}</span>
//         <span>${cur.hot}</span>
//         <span>${cur.price}</span>
//     </li>`
//     }
//     list.innerHTML=str
// }

//红箭头不会写，下面就不写了（后面的思路判断一下this.flag===1 
//是的话a循环a[i].children[0].classlist.add()/a[i].children[1].classlist.remove()
//然后再来一个函数清理点击别的按钮时候清空别的小红标




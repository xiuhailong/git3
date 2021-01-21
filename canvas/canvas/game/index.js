window.onload = function () {
  //获得画布元素
  var canvas = document.getElementById("canvas");
  //获得二维绘图对象
  var ctx = canvas.getContext("2d");
  //绘制矩形区域
  ctx.fillStyle = '#999';
  ctx.fillRect(0, 0, 300, 150);
  //事件
  canvas.onmousedown = function(e){
    canvas.onmousemove = function(e){
        var x = e.clientX;
        var y = e.clientY;
        ctx.clearRect(x,y,20,20);
    }
  }
  //鼠标up 清除移动事件
  canvas.onmouseup = function(e){
      console.log(6666);
      canvas.onmousemove = null;
  }
   //中奖信息 
   var arr = ['一个亿','海景别墅','一等奖','二等奖','三等奖','1000现金','谢谢惠顾','谢谢惠顾','谢谢惠顾']
   var i = Math.floor(Math.random()*arr.length)
   if(i==0) i = 7;
   console.log(i);
   document.querySelector(".prize").innerText = arr[i]
    
}

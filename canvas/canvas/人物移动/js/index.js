window.onload = function(){
    var arr = [{x:10,y:10},{x:530,y:320}] //坐标点
    let [speed,timer,flag] = [1,,false]
    // var speed = 1;
    // var timer;
    // var flag = false; //标记位
    //获得画布元素
    var canvas = document.getElementById("canvas")
    //获得2维绘图对象
    var cvsCtx = canvas.getContext("2d");
    var img = new Image();
    img.src = 'img/person.png'
    img.onload = function(){
        cvsCtx.drawImage(img, 10, 10, 12, 20); //加载图片
    }
    
      


    let btn1 = document.querySelector(".on")
    let btn2 = document.querySelector(".off")
    let box = document.querySelector(".main")
    btn1.onclick = function(){
        console.log(666);
        play()
    };
    btn2.onclick = function(){
        console.log(999);
        clearInterval(timer)
        flag = false
    }
    //定时器
    function play(){
        if(flag) return
        timer = setInterval(draw, 100);
        flag = true
    }
    //绘制
    function draw(){
        cvsCtx.clearRect(0,0,canvas.width,canvas.height) //清空画布内容
        if(arr[0].x < arr[1].x){
            arr[0].x += speed
        }
        if(arr[0].y < arr[1].y){
            arr[0].y += speed
        }
        cvsCtx.drawImage(img, arr[0].x, arr[0].y, 12, 20)
    }
    box.onclick = function(e){
        console.log(e);
        arr[1].x = e.clientX;
        arr[1].y =  e.clientY;
        console.log(arr);

    }
}


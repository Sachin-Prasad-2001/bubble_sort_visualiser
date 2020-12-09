const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
const comparisons = document.getElementById('comparisons');


let arr = new Array(60);
let cmp=0;

function generateArray(){
    for(let i=0;i<60;++i){
       arr[i]=Math.floor(Math.random()*501+100);
    }
}

function displayArray(){
    comparisons.innerText = cmp;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.lineWidth = 10;
    ctx.strokeStyle='white';
    let x = 10;
    ctx.beginPath();
    for(let i=0;i<arr.length;++i){
        ctx.moveTo(x,800);
        ctx.lineTo(x,800-arr[i]);
        ctx.stroke();
        x+=20;
    }
}

function update(){
    for(let i=0;i<arr.length-1;++i){
        if(arr[i]>arr[i+1]){
            ++cmp;
            let tmp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=tmp;
            break;
        }
    }
    displayArray();
    requestAnimationFrame(update);
}

generateArray();
requestAnimationFrame(update);
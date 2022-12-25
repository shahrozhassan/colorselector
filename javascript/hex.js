const colors = [1,2,3,4,5,6,7,8,9, "A", "B", "C","D","E","F"];

const btn = document.getElementById('btn');
const color=document.querySelector('.class');

btn.addEventListener("click",function(){
    let hex='#';
    for(let i = 0; i<6; i++){
         hex += colors[getRandomColor()];
         
        }
        document.body.style.backgroundColor= hex;
        color.textContent = hex;
});

function getRandomColor(){
    let value = Math.floor(Math.random() * colors.length);
    return value;
}
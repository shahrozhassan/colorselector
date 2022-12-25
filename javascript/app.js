const colors=['red', 'green', 'grey', 'white'];

const btn=document.getElementById('btn');
const color=document.querySelector('.class');

btn.addEventListener("click", function(){
const randomColor=getRandomColor();
document.body.style.backgroundColor=colors[randomColor];
color.textContent = colors[getRandomColor]

});

function getRandomColor(){

    let value= Math.floor(Math.random() * colors.length);
    return value;
}
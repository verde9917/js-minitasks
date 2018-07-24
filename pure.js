// task01
function changeTextColor(){
    let text = document.getElementById('targetOfChangeColor');
    text.style.color = '#ff95c8';
}
document.getElementById('TextColor').addEventListener('click',changeTextColor);

// task02
function changeText(){
    let text = document.getElementById('targetOfChangeText');
    text.innerHTML = 'Hello,JavaScript!';
}
document.getElementById('firstText').addEventListener('click',changeText);

// task03
// task01
changeTextColor = () => {
    let text = document.getElementById('targetOfChangeColor');
    text.style.color = '#ff95c8';
}
document.getElementById('TextColor').addEventListener('click', changeTextColor);

// task02
changeText = () => {
    let text = document.getElementById('targetOfChangeText');
    text.innerHTML = 'Hello,JavaScript!';
}
document.getElementById('firstText').addEventListener('click', changeText);

// task03
showTypedText = () => {
    let typed = document.getElementById('typeText').value;
    document.getElementById('typedText').innerHTML = typed;
}
document.getElementById('typeText').addEventListener('keyup',showTypedText);

// task04
addDifferentClass = () => {
    let targetDiv = document.getElementById('setClass');
    targetDiv.classList.add('newClass');
}
document.getElementById('setClass').addEventListener('click',addDifferentClass);
// task no01
changeTextColor = () => {
    let text = document.getElementById('targetOfChangeColor');
    text.style.color = '#ff95c8';
}
document.getElementById('TextColor').addEventListener('click', changeTextColor);

// task no02
changeText = () => {
    let text = document.getElementById('targetOfChangeText');
    text.innerHTML = 'Hello,JavaScript!';
}
document.getElementById('firstText').addEventListener('click', changeText);

// task no03
showTypedText = () => {
    let typed = document.getElementById('typeText').value;
    document.getElementById('typedText').innerHTML = typed;
}
document.getElementById('typeText').addEventListener('keyup',showTypedText);

// task no04
addClass = () => {
    let targetDiv = document.getElementById('setClass');
    targetDiv.classList.add('newClass');
}
document.getElementById('setClass').addEventListener('click',addClass);

// task no05
removeClass = () => {
    let targetDiv = document.getElementById('hasClass');
    targetDiv.classList.remove('newClass');
}
document.getElementById('hasClass').addEventListener('click',removeClass);
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
    document.getElementById('typedText').innerHTML = document.getElementById('typeText').value;
}
document.getElementById('typeText').addEventListener('keyup',showTypedText);

// task no04
addClass = () => {
    let targetDiv = document.getElementById('addClass');
    targetDiv.classList.add('newClass');
}
document.getElementById('addClass').addEventListener('click',addClass);

// task no05
removeClass = () => {
    let targetDiv = document.getElementById('removeClass');
    targetDiv.classList.remove('newClass');
}
document.getElementById('removeClass').addEventListener('click',removeClass);

// task no06
toggleClass = () => {
    let targetDiv = document.getElementById('toggleClass');
    targetDiv.classList.toggle('newClass');
}
document.getElementById('toggleClass').addEventListener('click',toggleClass);

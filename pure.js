// task no01
let changeTextColor = () => {
    let text = document.getElementById('targetOfChangeColor');
    text.style.color = '#ffc0c2';
};
document.getElementById('TextColor').addEventListener('click', changeTextColor);

// task no02
let changeText = () => {
    let text = document.getElementById('targetOfChangeText');
    text.innerHTML = 'Hello,JavaScript!';
};
document.getElementById('firstText').addEventListener('click', changeText);

// task no03
let showTypedText = () => {
    document.getElementById('typedText').innerHTML = document.getElementById('typeText').value;
};
document.getElementById('typeText').addEventListener('keyup',showTypedText);

// task no04
let addClass = () => {
    let targetDiv = document.getElementById('addClass');
    targetDiv.classList.add('newClass');
};
document.getElementById('addClass').addEventListener('click',addClass);

// task no05
let removeClass = () => {
    let targetDiv = document.getElementById('removeClass');
    targetDiv.classList.remove('newClass');
};
document.getElementById('removeClass').addEventListener('click',removeClass);

// task no06
let toggleClass = () => {
    let targetDiv = document.getElementById('toggleClass');
    targetDiv.classList.toggle('newClass');
};
document.getElementById('toggleClass').addEventListener('click',toggleClass);

// task no07
// 参考 : https://q-az.net/without-jquery-fadein-fadeout-slideup-slidedown/
let fadeIn = () => {
    let begin = new Date();
    let target = document.getElementById('fadeInText');
    let Time = 1000;
    let id = setInterval(() => {
        let current = new Date() - begin;
        if (current > Time){
            clearInterval(id);
            current = Time;
        }
        target.style.opacity = current / Time;
    }, 10);
};
document.getElementById('fadeInButton').addEventListener('click',fadeIn);

// task 08
let fadeOut = () => {
    let begin = new Date();
    let target = document.getElementById('fadeOutText');
    let Time = 1000;
    let id = setInterval(() => {
        let current = new Date() - begin;
        if (current > Time){
            clearInterval(id);
            current = Time;
            target.style.visibility= 'hidden';
        }
        target.style.opacity = 1 - current / Time;
    }, 10);
};
document.getElementById('fadeOutButton').addEventListener('click',fadeOut);

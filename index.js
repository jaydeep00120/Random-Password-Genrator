// getting elements
const passwordEl = document.getElementById('password');
const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = lower.toUpperCase();
const number = '1234567890'; 
const symbol = '!@#$%^&*()-_=';

// functions for getting random anything

const getLowerCase = () =>{
    return lower[Math.floor(Math.random()*lower.length)]
}
const getUpperCase = () =>{
    return upper[Math.floor(Math.random()*upper.length)]
}
const getNumber = () =>{
    return number[Math.floor(Math.random()*number.length)]
}
const getSymbol = () =>{
    return symbol[Math.floor(Math.random()*symbol.length)]
}

// main function

const generate = () =>{
    const len = lengthEl.value;
    let password = '';
        for(let i = 0; i < len; i++){
            const x = generateX()
            password += x;
    }

    passwordEl.innerText = password;
}

// function to get string

const generateX = () =>{
    const xs = [];
    if(upperEl.checked){
        xs.push(getUpperCase());
    }
    if(lowerEl.checked){
        xs.push(getLowerCase());
    }
    if(numberEl.checked){
        xs.push(getNumber());
    }
    if(symbolEl.checked){
        xs.push(getSymbol());
    }
    if(xs.length === 0 ) return '';
    return xs[Math.floor(Math.random()*xs.length)];
}

generateEl.addEventListener('click',generate);
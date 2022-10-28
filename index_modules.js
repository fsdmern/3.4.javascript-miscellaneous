// import {addition, substraction, multiplication, division} from './functions';

const n1 = 20;
const n2 = 30;

document.getElementById('n1').textContent = n1;
document.getElementById('n2').textContent = n2;

document.getElementById('addition').textContent = addition(n1, n2);
document.getElementById('substraction').textContent = substraction(n1, n2);
document.getElementById('multiplication').textContent = multiplication(n1, n2);
document.getElementById('division').textContent = division(n1, n2);

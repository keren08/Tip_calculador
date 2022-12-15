import tipCalculator from "./modules/tipCalculator.js";
import totalFinal from "./modules/TotalFinal.js";


const form = document.getElementById('main-form');
const resultTip = document.getElementById('result-tip');
const resultTotal = document.getElementById('result-total');


//guardar valores en variables
const subtotal = document.getElementById('total-bill');
const personas = document.getElementById('total-people');
const tipsDiv = document.getElementById('form-btn');
let porcenTip;

tipsDiv.addEventListener('click',(e)=>{
    porcenTip = e.target;
});

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const formulario={
        subtotalF : subtotal.value,
        personasF : personas.value,
        porcenTipF : porcenTip.value
    }

    const{subtotalF,personasF,porcenTipF}= formulario;

    console.log(formulario);
    let tip = tipCalculator(subtotalF,personasF,porcenTipF);
    let total = totalFinal(subtotalF,personasF,tip);
    tip = parseInt(tip).toFixed(2);
    total = parseInt(total).toFixed(2);
    actualizarTotal(total,tip);
});


function actualizarTotal(total,tip){
    resultTip.textContent = '$' + tip;
    resultTotal.textContent = '$' + total;
}
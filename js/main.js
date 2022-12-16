import tipCalculator from "./modules/tipCalculator.js";
import totalFinal from "./modules/TotalFinal.js";
import actualizarTotal from "./modules/actualizar.js";

const form = document.getElementById("main-form");
const resultTip = document.getElementById("result-tip");
const resultTotal = document.getElementById("result-total");

//guardar valores en variables
const subtotal = document.getElementById("total-bill");
const personas = document.getElementById("total-people");
const tipsDiv = document.getElementById("form-btn");
let porcenTip;

tipsDiv.addEventListener("click", (e) => {
  porcenTip = e.target;

  const active = document.getElementById(e.target.id);
  active.classList.add("active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formulario = {
    subtotalF: subtotal.value,
    personasF: personas.value,
    porcenTipF: porcenTip.value,
  };

  const { subtotalF, personasF, porcenTipF } = formulario;
  let tip = tipCalculator(subtotalF, personasF, porcenTipF);
  let total = totalFinal(subtotalF, personasF, tip);
  tip = parseInt(tip).toFixed(2);
  total = parseInt(total).toFixed(2);
  actualizarTotal(total, resultTotal, tip, resultTip);
});

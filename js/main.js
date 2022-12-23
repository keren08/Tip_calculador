import tipCalculator from "./modules/tipCalculator.js";
import totalFinal from "./modules/TotalFinal.js";
import actualizarTotal from "./modules/actualizar.js";
import validar from "./modules/validar.js";

const form = document.getElementById("main-form");
const resultTip = document.getElementById("result-tip");
const resultTotal = document.getElementById("result-total");

//guardar valores en variables
const subtotal = document.getElementById("total-bill");
const personas = document.getElementById("total-people");
const tipsDiv = document.getElementById("form-btn");
const reset = document.getElementById('reset');
const custom =  document.getElementById('buton6');
let porcenTip;

tipsDiv.addEventListener("click", (e) => {
  porcenTip = e.target;
  let id = e.target.id;
  let type = e.target.type;

  desacBackgroundGreen(type);
  activeBackgroundGreen(id,type);
});
//captura el evento al hacer click en calcular y ejecuta las operaciones
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //obtinen los valores de las variables para posteriormente analizar si son correctas
  let personasValue = personas.value?personas.value:-1;
  let subtotalValue = subtotal.value?subtotal.value:-1;
  let tipDiValue = porcenTip?porcenTip.value:-1;

  //verifica si cada valor es valido
  let validoPersonas =validar(personas,personasValue,false);
  let validoTip =validar(tipsDiv,tipDiValue,true);
  let validoSub =validar(subtotal,subtotalValue,false);

  //si pasa la validacion se actualiza
  if(validoPersonas&&validoSub&&validoTip){
    actualiza();
}
});

//limpia todos los valores
reset.addEventListener('click',(e)=>{
  //quita los valores de input
  porcenTip = '';
  personas.value='';
  subtotal.value='';
  custom.value='';
  //quita el background verde
  limpiaBackground();
  //limpia los totales
  resultTotal.textContent = "$0.00";
  resultTip.textContent = "$0.00";

  //quita los mensajes de error
  validar(personas,100,false);
  validar(tipsDiv,100,true);
  validar(subtotal,100,false);
});

//activar el boton al cual se le dio click
function activeBackgroundGreen(id,type){
  if(type == 'button'){
    const active = document.getElementById(id);
    active.classList.add("active");
    }
}

//funcion para quitar el fondo verde al seleccionar boton diferente
function desacBackgroundGreen(type) { 
  if(type == 'button'|| type == 'text'){
    limpiaBackground();
  }
}

function limpiaBackground(){
  const botones = document.querySelectorAll('.form__contenedor__btns__button');
  for(let i=0;i< botones.length;i++){
  botones[i].classList.remove('active')
}
}

function actualiza(){
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
}




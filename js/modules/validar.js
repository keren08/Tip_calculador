function validar(elemento,valor,esTip){
    let esValido = true;
    let mensaje = esTip?'Debe seleccionar un Tip':'El valor debe ser mayor a 0.00';
    let tagMensaje =elemento.parentElement.parentElement.lastElementChild.tagName;
    let tagTipMensaje =elemento.parentElement.lastElementChild.tagName;

  //si es el input de personas o subtotal remueve la clase y el mensaje de error
    if(tagMensaje == 'SPAN' && !esTip){
        elemento.parentElement.classList.remove('error');
        elemento.parentElement.parentElement.lastElementChild.remove();
    }else if(tagTipMensaje == 'SPAN' && esTip){
          //si es la lista de botones de tip remueve la clase y el mensaje de error
        elemento.classList.remove('error');
        elemento.parentElement.lastElementChild.remove();
    }

    //si es el input de personas o subtotal y el valor no es correcto agrega la clase  y el mensaje de error
    if(valor<=0 &&!esTip){
        esValido = false;
        elemento.parentElement.classList.add('error');
        elemento.parentElement.insertAdjacentHTML('afterend',`<span class="text__error">${mensaje}</span>`);
    }else if(valor<=0 &&esTip){
          //ssi es la lista de botones de tip y el valor no es correcto agrega la clase y el mensaje de error
        console.log(valor);
        esValido = false;
        elemento.classList.add('error');
        elemento.insertAdjacentHTML('afterend',`<span class="text__error">${mensaje}</span>`);
    }

    return esValido;
}

export default validar;
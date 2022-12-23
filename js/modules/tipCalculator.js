
function tipCalculator(subtotal,personas,porcenTip){
    porcenTip= porcenTip/100;
    const totalTip = (subtotal*porcenTip) / personas;

    return totalTip;
}

export default tipCalculator;
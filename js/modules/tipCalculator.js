
function tipCalculator(subtotal,personas,porcenTip){
    const totalTip = (subtotal*porcenTip) / personas;

    return totalTip;
}

export default tipCalculator;
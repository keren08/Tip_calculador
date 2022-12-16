function actualizarTotal(total, resultTotal, tip, resultTip) {
  resultTotal.textContent = "$" + total;
  resultTip.textContent = "$" + tip;
}

export default actualizarTotal;

function cToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fToC(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export { cToF, fToC };

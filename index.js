var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeli.push(name)
  for (var katzDeliLine = 1; katzDeliLine < katzDeli.length; katzDeliLine++) {
    return `Welcome, ${name}. You are number ${katzDeliLine} in line.`
  }
}

var katzDeli = [];
var number = 0;
var katzHistory = {
  
};


/*function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}*/

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var currentCustomer = katzDeliLine.shift();
    katzHistory[currentCustomer]["timeOut"] = Date.now();
    return `Currently serving ${currentCustomer}.`;
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length < 1) {
    return "The line is currently empty.";
  } else {
  var theLine = "The line is currently: ";
  for (var i = 0; i < katzDeliLine.length; i++) {
    (i === katzDeliLine.length - 1) ? theLine =`${theLine}${i + 1}. ${katzDeliLine[i]}` : theLine = `${theLine}${i + 1}. ${katzDeliLine[i]}, `;
  }
  return theLine;
  }
}

function takeANumber(katzDeliLine, name) {
  number++;
  
  var person = {
    number: number,
    timeIn: Date.now(),
  }
  katzHistory[number] = person;
  katzDeliLine.push(number);
  return `You are number ${number}`;
}


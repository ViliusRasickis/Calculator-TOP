// TODO: github logo in the bottom right corner

let results = document.getElementById("res");
let storedValueA = "";
let storedValueB = "";
let storedValueC = "";
let storedOperator = "";
let result = "";

function storeValue(value) {
  let tempValue = value.trim();
  if (storedValueB === "" && storedValueC === "" && storedOperator === "") {
    if (storedValueA.length < 10) {
      storedValueA += tempValue;
      results.innerHTML = storedValueA;
    }
  } else if (storedValueB === "") {
    if (storedValueB.length < 10) {
      storedValueB += tempValue;
      results.innerHTML = storedValueB;
    }
  } else if (storedValueB !== "" && storedOperator !== "") {
    if (storedValueC.length < 10) {
      storedValueC += tempValue;
      results.innerHTML = storedValueC;
    }
  }
}

function storeOperator(operator) {
  let tempOperator = operator.trim();

  if (storedValueA === "") {
    storedOperator = "";
  } else if (storedValueA !== "" && storedValueB === "") {
    storedOperator = tempOperator;
    results.innerHTML = storedOperator;
  } else if (storedValueC === "") {
    storedOperator = tempOperator;
    results.innerHTML = storedOperator;
  } else {
    storedOperator = storedOperator;
  }
}

function clearResults() {
  results.innerHTML = "0";
  storedValueA = "";
  storedValueB = "";
  storedValueC = "";
  storedOperator = "";
  result = "";
}

function operate() {
  storedValueA = parseInt(storedValueA);
  storedValueB = parseInt(storedValueB);
  if (isNaN(storedValueB)) {
    storedValueB = "";
  }

  if (storedValueC !== "") {
    postResultOperation();
  } else if (storedOperator === "%") {
    percentage();
  } else if (storedOperator === "+") {
    result = storedValueA + storedValueB;
    results.innerHTML = result;
    storedOperator = "";
  } else if (storedOperator === "-") {
    result = storedValueA - storedValueB;
    results.innerHTML = result;
    storedOperator = "";
  } else if (storedOperator === "*") {
    result = storedValueA * storedValueB;
    results.innerHTML = result;
    storedOperator = "";
  } else if (storedOperator === "/") {
    result = storedValueA / storedValueB;
    results.innerHTML = result;
    storedOperator = "";
  } else {
    alert("The operator is not chosen yet.");
  }
  storedValueC = "";
  console.log(storedValueA);
  console.log(storedValueB);
}

function postResultOperation() {
  storedValueC = parseInt(storedValueC);
  if (storedOperator === "+") {
    result += storedValueC;
    return (results.innerHTML = result);
  } else if (storedOperator === "-") {
    result -= storedValueC;
    return (results.innerHTML = result);
  } else if (storedOperator === "*") {
    result *= storedValueC;
    return (results.innerHTML = result);
  } else if (storedOperator === "/") {
    result /= storedValueC;
    return (results.innerHTML = result);
  } else {
    alert("The operator is not chosen yet.");
  }
}
// basically, when they choose %

function percentage() {
  console.log(storedValueA);
  console.log(storedValueB);
  console.log(storedValueC);
  console.log(result);
  if (result !== "" && storedValueC === "") {
    result = result / 100;
    return (results.innerHTML = result);
  } else if (storedValueC !== "") {
    storedValueC = storedValueC / 100;
    return (results.innerHTML = storedValueC);
  } else if (result === "" && storedValueB !== "") {
    storedValueB = storedValueB / 100;
    return (results.innerHTML = storedValueB);
  } else {
    storedValueA = storedValueA / 100;
    //result = storedValueA;
    return (results.innerHTML = storedValueA);
  }
}


let a = "";
let b = "";
let operator;

let button = document.getElementsByClassName("numbers");
let input1 = document.getElementById("input");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    let temp = button[i].value;

    input1.value += temp;

    if (a != "") {
      b = input1.value;
    }
  });
}

let add1 = document.getElementById("add");
add1.addEventListener("click", function (e) {
    if (a == "") {
        a = input1.value;
      } else {
        a = result1();
      }
  operator = "+";
  input1.value = "";
});

let sub1 = document.getElementById("sub");
sub1.addEventListener("click", function () {
  if (a == "") {
    a = input1.value;
  } else {
    a = result1();
  }
  operator = "-";
  input1.value = "";
});

let mul1 = document.getElementById("mul");
mul1.addEventListener("click", function () {
  if (a == "") {
    a = input1.value;
  } else {
    a = result1();
  }
  operator = "*";
  input1.value = "";
});

function result1() {
  console.log(a);
  console.log(b);

  switch (operator) {
    case "+":
      output = Number(a) + Number(b);
      break;
    case "-":
      output = Number(a) - Number(b);
      break;
      case "*":
      output=Number(a)*Number(b);
    default:
      break;
  }
  return output;
}

let result = document.getElementById("result");
let output;
result.addEventListener("click", function () {
  input1.value = result1();
});



























//calculator

// let a;
// let b;

// let button= document.getElementsByClassName("numbers");
// let input1= document.getElementById("input");

// for(let i=0; i<button.length;i++){

//     button[i].addEventListener("click",
//     function(){

//        let temp= button[i].value;

//        input1.value+=temp;
//     //    a= input1.value;
//        let val = input1.value;
//     if (a == "") {
//       a = val;
//     } else {
//       b = val;
//     }
//     })
// }

// let add= document.getElementById("add");

// add.addEventListener("click", function(e){
// input1.value="";
//     input1.value=JSON.parse("");
// })

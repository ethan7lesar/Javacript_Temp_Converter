let num1 = document.getElementById('celcuis');
let num2 = document.getElementById("fahrenheit");


function celciusT() {
    let output = (parseFloat(num1.value)* 9/5) + 32;
    num2.value = parseFloat(output.toFixed(2));
  }

  function fahrenheitT() {
    let output = (parseFloat(num2.value)-32) * 5/9;
    num1.value = parseFloat(output.toFixed(2));

  }
































// let celcius = parseInt(document.getElementById("celcius").textContent);
// let fehrenheit = parseInt(document.getElementById("fahrenheit").textContent);
// console.log(celcius, fehrenheit)

// function convertor(op, in1, in2) {
//   // let tempValue = +event.target.value;
//   let result;

//   switch (op) {
//     case "celcius":
//       result = (in2 * 1.8 + 32).toFixed(2);
//       break;
//     case "fahrenheit":
//       result = ((in1 - 32) / 1.8).toFixed(2);
//       break;
//     default:
//       break;
//   }
//   console.log(result);
//   return result;
// }
// function convert(){
//     // let tempNumber = document.getElementById('temp-num').innerHTML;
//     // let temType = document.getElementById('tempSelect').value;
//     // let conversion;

//     // if(temType.value = 'cel'){
//     //     conversion.value = (parseFloat(tempNumber.innerHTML) - 32) * 5/9;
//     //     document.getElementById('output').innerHTML = conversion.value;
//     // }else if(temType.value = 'fer'){
//     //     conversion.value = (parseFloat(tempNumber.innerHTML) - 32) * 9/5 + 32;
//     //     document.getElementById('output').innerHTML = conversion.value;
//     // }
// }

// return convert();
// function convert(conversion){

//     let temperature = document.getElementById("temp-num");
//     let tempType = document.getElementById("tempSelect");
//      conversion = parseFloat(conversion);
//      temperature = parseFloat(temperature);

//     if(tempType = '' ){
//         conversion =(temperature.innerHTML - 32) * 5/9;
//         document.getElementById('output').innerHTML = conversion;
//     } else if (tempType = '&#8457')  {
//         conversion =(temperature.innerHTML - 32) * 9/5 + 32;
//         document.getElementById('output').innerHTML = conversion;
//     }
// }

// function temperatureConverter(valNum) {
//     valNum = parseFloat(valNum);
//     document.getElementById("outputCelcius")=(valNum-32)/1.8;
//   }

// function convert() {
//     let tempType = 'cel';
//     let tempValue = 90;

//   switch (tempType) {
//     case 'cel':
//       tempValue.innerHTML = ((tempValue - 32) * 5) / 9;
//       console.log(tempValue)
//       break;
//     case 'fer':
//       tempValue = ((tempValue - 32) * 9) / 5 + 32;
//       break;
//   }
// }


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
function convert(){

    let temperature = document.getElementById("temp-num");
    let tempType = document.getElementById("tempSelect");
    let conversion; 

    if(tempType = '&#8451' ){
        conversion =(temperature.innerHTML - 32) * 5/9;
        document.getElementById('output').innerHTML = conversion;   
    } else if (tempType = '&#8457')  {
        conversion =(temperature.innerHTML - 32) * 9/5 + 32;
        document.getElementById('output').innerHTML = conversion;
    }
}



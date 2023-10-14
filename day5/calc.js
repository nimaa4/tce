function c(){
    let num1=document.getElementById("n1").value
    let num2=document.getElementById("n2").value
    let opr=document.querySelector("#opr").value
    let res;
    if(opr=='+'){
        res=parseFloat(num1)+parseFloat(num2)
        document.getElementById("output").innerHTML= "Your answer is "+ res
    }
    else if(opr=='-'){
        res=parseFloat(num1)-parseFloat(num2)
        document.getElementById("output").innerHTML= "Your answer is "+ res
    }
    else if(opr=='*'){
        res=parseFloat(num1)*parseFloat(num2)
        document.getElementById("output").innerHTML= "Your answer is "+ res
    }  
    else if(opr=='/'){
        res=parseFloat(num1)/parseFloat(num2)
        document.getElementById("output").innerHTML= "Your answer is "+ res
    }         
}

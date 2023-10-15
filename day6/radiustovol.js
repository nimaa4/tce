function volume(){
    let rad=document.getElementById("r").value
    const pi=Math.PI
    let res=(4/3)*pi*Math.pow(parseFloat(rad),3)
    document.getElementById("output").innerHTML= "Volume: "+ res.toFixed(2)
}
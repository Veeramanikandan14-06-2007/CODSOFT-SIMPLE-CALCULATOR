function appendtoScreen(value){
document.getElementById("screen").value += value;
}
function ClearScreen(){
    document.getElementById( "screen").value="";
}
function CalcResult(){
    try{
        document.getElementById("screen").value = eval(document.getElementById("screen").value);

    }
    catch(error){
        document.getElementById("screen").value="ERROR"

    }
}
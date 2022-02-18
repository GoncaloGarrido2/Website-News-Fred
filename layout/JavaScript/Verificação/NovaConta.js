document.getElementById("log").style.fontSize = "25px"; 
document.getElementById("log").style.color = "black";
document.getElementById("log").style.backgroundColor = "orange";

function OnClickSubmeter() {
    let Pwd01 = document.getElementById("password01").value;
    let Pwd02 = document.getElementById("password02").value;
    if(Pwd01==Pwd02)
    {
        let registo = document.getElementById('resp');   
        function logSubmit(event) {
            registo.textContent = 'Registo efetuado com sucesso!';
            event.preventDefault();
        }
        
        document.getElementById("resp").style.fontSize = "25px"; 
        document.getElementById("resp").style.color = "tomato";
        document.getElementById("resp").style.backgroundColor = "yellow"; 
    }
    else
    {
        document.getElementById("resp").style.fontSize = "25px"; 
        document.getElementById("resp").style.color = "tomato";
        document.getElementById("resp").style.backgroundColor = "yellow"; 
        let registo = document.getElementById('resp');   
        registo.textContent = 'As suas passwords estao diferentes!';
    }
    return false
}
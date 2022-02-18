function OnClickEntrar() {
    let email = document.getElementById("email").value;
    let passw = document.getElementById("password01").value;
    if(email=="admin@email.pt" && passw=="123")
    {
        document.getElementById("resp").style.fontSize = "25px"; 
        document.getElementById("resp").style.color = "tomato";
        document.getElementById("resp").style.backgroundColor = "yellow";  
        let registo = document.getElementById('resp');   
        registo.textContent = 'Entrou!';
        var url= "./Principal.html"; 
        window.location = url;
    }
    else
    {
        document.getElementById("resp").style.fontSize = "25px"; 
        document.getElementById("resp").style.color = "tomato";
        document.getElementById("resp").style.backgroundColor = "yellow";  
        let registo = document.getElementById('resp');   
        registo.textContent = 'O utilizador nao existe!';
    }
    return false
}

function valida() {
    var user = document.getElementById('username').value
    var pass = document.getElementById('password').value
    if(user = '' || pass ==''){
        alert("usuario e senha invalidos");
        $('#direct').attr("href", "#")
    }
    else if (user != "admin" && pass != "admin") {
        alert("logado como usuario")
        $('#direct').attr("href", "/livros2")

    } else
        alert("logado como admin")
}
function logar(event) {

    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == 'admin' && senha == 'admin') {
        Swal.fire({
            title: 'login realizado!',
            text: 'Bem vindo, ' + usuario + '!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "./html/home.html";
            }, 100);
        });
    }else{
        Swal.fire({
            title: 'Error',
            text: 'usuario ou senha incorreta.',
            icon: 'error',
            confirmButtonText: 'tente novamente'
        });
    }
    
}
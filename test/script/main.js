document.getElementById("signin_btn").onclick = () => {

    let inp1 = document.getElementsByClassName("log_inp")[0].value;
    let inp2 = document.getElementsByClassName("log_inp")[1].value;


    if ((inp1 && inp2) != 0) {

        alert("Privet " + inp1 + " Tebe " + inp2 + " let");

    } else{
        alert("Введите что-нибудь в поля!");
    }
}
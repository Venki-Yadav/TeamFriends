function submit(){
    let input = document.querySelector("input").value;

    if(input== 1234 || input ==5678 || input == 1100){
        window.location.href="signup.html";
    }else{
        document.getElementById("res").textContent="Wrong OTP";
    }
}
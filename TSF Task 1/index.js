



function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    // Create a SMTP crendentials that I showed u in my previous video

    // Generating random number as OTP;

    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1>PAY!!!</h1> <br>
        <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        SecureToken : "c558caa8-2647-4e73-82d7-d4757beb2f3b",
        To : email.value,
        From : email.value,
        Subject : "please donate",
        Body : emailbody
    }).then(
        //if success it returns "OK";
      message => {
        if(message === "OK"){
            alert("OTP sent to your email "+email.value);

            // now making otp input visible
            otpverify.style.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click',()=>{
                // now check whether sent email is valid
                if(otp_inp.value == otp_val){
                    alert("Email address verified...LINK TO DONATE:-https://rzp.io/l/m37WuduSxY");
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }
      }
    );

}
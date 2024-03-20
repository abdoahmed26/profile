let myName = document.querySelector(".name");
let btn = document.querySelector(".btn");
let MyEmail = document.querySelector("#email");
let MyMessage = document.querySelector("#Message");
let form = document.querySelector("#form");
let scrollUp = document.querySelector(".up");

window.addEventListener("scroll",function(){
    if(this.scrollY >=20){
        scrollUp.style.display = "block";
    }
    else{
        scrollUp.style.display = "none";
    }
});
scrollUp.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

btn.addEventListener("click", function(e){
    e.preventDefault();
    let ebody = `
        <p>Hello Abdulrahman Ahmed</p>
        <p>You got a new message from : ${myName.value}</p>
        <p>His Email : ${MyEmail.value}</p>
        <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
            Message : ${MyMessage.value}
        </p>
        <p>Best wishes,</p>
        <p>Code With Abdulrahman</p>
    `

    Email.send({
        // Host : "smtp.elasticemail.com",
        // Username : "ba2662003@gmail.com",
        // Password : "39C0A2454245103EBF9BABC7E4F374290B18",
        SecureToken : "8e49f637-4e21-480a-9659-e5f26268e7ba",
        To : 'ba2662003@gmail.com',
        From : "ba2662003@gmail.com",
        Subject : "Message From Email "+MyEmail.value,
        Body : ebody
    }).then(
        message => {
            if(message==="OK"){
                swal("Successfull", "Your Data Successfull Received", "success");
            }
            else{
                swal("Something Wrong", "Your Data is not Received", "error");
            }
        }
    );
    myName.value = "";
    MyEmail.value = "";
    MyMessage.value = "";
})

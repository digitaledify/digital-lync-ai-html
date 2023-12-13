function getSkilled(){
    event.preventDefault();
    

var name=document.getElementById('name').value;
var phone=document.getElementById('phone').value;
var email=document.getElementById('email').value;
   alert("I am in get skilled");
console.log(name);
console.log(phone);
console.log(email);
Email.send({ 
    Host: "smtp.gmail.com", 
    Username: "createemail52@gmail.com", 
    Password: "npvx@2281", 
    To: 'srinivas@konadigital.ai', 
    From: "srinivas@konadigital.ai", 
    Subject: "Leads Info", 
    Body: `

     Please find the lead details below.

          <div style="padding:10px 20px; background:#fafafafa; border:1px solid #eeeeee; width:30%;">  Name: ${name}  </div>

           <div style="padding:10px 20px; background:#fafafafa; border:1px solid #eeeeee; width:30%;"> Phone: ${phone} </div>

           <div style="padding:10px 20px; background:#fafafafa; border:1px solid #eeeeee; width:30%;"> Email : ${email} </div>
    `, 
  }) 
    .then(function (message) { 
        console.log(message);
         if(message == "OK"){
        window.location.href = "thank-you.html";
        alert("mail sent successfully") ;
         }
         else 
         {
             alert("Please try again!");
         }
      
    }); 
} 

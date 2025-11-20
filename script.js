function submitEmail(){
    const email=document.getElementById("email").value;
    if(email){
        alert("Thank you for subscribing! A discount code is : WELCOME10");
        closePopup();
    }else{
        alert("Please enter a valid email address.");
    }
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}

function showPopup(){
    document.getElementById("popup").style.display="block";
}
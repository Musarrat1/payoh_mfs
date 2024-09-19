console.log("Button clicked");
document.getElementById("button-login").addEventListener('click',function(event){
    event.preventDefault();
    console.log("logging button clicked");
    const phoneNumber = document.getElementById('phone-number').value;
    const pinnumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinnumber);
    if(phoneNumber=== '5'&& pinnumber==='123'){
        console.log("you are logged in");
        window.location.href = '/home.html';//for go to the next page
    }
    else{
        alert('wrong phone number or pin ');
    }

})
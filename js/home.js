document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    console.log('money add button clicked');
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber);
    if(pinNumber==='123'){
        console.log("Add your money");
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        //add money
        const newBalance = balance + addMoneyInput;

    }
    else{
        alert("failed to add money");
    }
});
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
        const addMoney = parseFloat(addMoneyInput);
        const saveBalance = parseFloat(balance);

        const newBalance = addMoney + saveBalance;
        console.log(newBalance);
        //update the element

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert("failed to add money");
    }
});
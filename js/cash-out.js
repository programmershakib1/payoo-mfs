document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(cashOut);
        const pinNumber = document.getElementById('input-cash-out-pin').value;
        // wrong wat to verify pin number
        if(pinNumber === '1234'){
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);
            // reduce the balance
            const newBalance = balanceNumber - cashOutNumber;
            // update the ui
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Failed to cash out. please try again later')
        }
});
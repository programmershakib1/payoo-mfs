// add money to the account

/**
 * step 1: add event handler
 * prevent page reload after form submit
 * step 2: get money to be added to the account balance
 * get the pin number
 * step 3: verify pin number
 */
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        // prevent page reload after form submit
        event.preventDefault();

        // step 2: get money to be added to the account balance
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);

        // get the pin  number
        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput);

        //  step 3: verify pin number
        // wrong way to validate pin number
        if(pinNumberInput === '1234'){
            console.log('adding money to your account');

            // step 4: get the current balance
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance)

            // step 5: add a addMoney width balance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber + addMoneyNumber;
            console.log(newBalance);

            // step 6: update the balance in the UI/DOM
            document.getElementById('account-balance').innerText = newBalance;

        }
        else{
            alert('failed to add money! please try again.');
        }
})
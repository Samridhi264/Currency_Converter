const usdvalue = document.getElementById('usdvalue');
const resultInput = document.getElementById('result');
const btns = document.getElementById('btns');
function convert(currencyId,usdvalue) {
    fetch(`https://free.currconv.com/api/v7/convert?q=USD_${currencyId}&compact=ultra&apiKey=789f1e580bd6dda666ec`)
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        var rate = result[`USD_${currencyId}`];
        resultInput.value = usdvalue*rate;
    })
    .catch(function(err){
        console.log(err);
    })
} 
btns.addEventListener('click',function(event){
    const button = event.target;
    const currencyId = button.getAttribute('data-currencyid');
     if(currencyId === null) 
    {
        return ;
    }
    convert(currencyId,usdvalue.value);
})

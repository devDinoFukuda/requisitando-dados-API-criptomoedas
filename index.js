var respBtc;
var respEth;
var request;

function consumindoApi(apiCriptoBtc,dadosBtc,apiCriptoEth ){
 
  request = new XMLHttpRequest();
  request.open('GET', apiCriptoBtc, apiCriptoEth, true);

  request.onload = function() {
  if (request.readyState == 4 && (request.status >= 200 && request.status < 400)) {
      // Success!
      respBtc = request.responseText;
      console.log(respBtc)

      document.getElementById(dadosBtc).innerText=respBtc;
      
  } else {
    request.onerror = function() {
      // There was a connection error of some sort
          console.log("Erro:"+request);


  }
  }
  
  };

  request.send();
}



consumindoApi("https://www.mercadobitcoin.net/api/BTC/ticker/","dadosBtc"); 



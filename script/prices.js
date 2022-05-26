function getDripPrice() {
    $.get("https://api.drip.community/prices/", function(data) {
      let price = data[data.length -1].value;
      price = Math.round(price * 100) / 100;
      $("#drip").html(price);
        //console.log(price);
    });
  }
  setTimeout(getDripPrice, 100);
  setInterval(getDripPrice, 2000);


  function getPigsPrice() {
    $.get("https://api.pancakeswap.info/api/v2/tokens/0x9a3321E1aCD3B9F6debEE5e042dD2411A1742002", function(data) {
      let price =  data.data.price;
      price = Math.round(price * 100) / 100;
      document.getElementById("pigs").innerHTML = price;
    });
  }
  setTimeout(getPigsPrice, 100);
  setInterval(getPigsPrice, 2000);

    /*
  function getDogsPrice() {
    $.get("https://api.pancakeswap.info/api/v2/tokens/0xDBdC73B95cC0D5e7E99dC95523045Fc8d075Fb9e", function(data) {
      let price =  data.data.price;
      price = Math.round(price * 100) / 100;
      document.getElementById("dogs").innerHTML = price;
    });
  }
  setTimeout(getDogsPrice, 100);
  setInterval(getDogsPrice, 2000);
  */

  function getBreapPrice() {
    $.get("https://graphs.coinpaprika.com/currency/data/br34p-br34p/1y/?quote=usd", function(data) {
      let price2 = data[0].price.slice(-1);
      let price = price2[0][1];
      price = Math.round(price * 100) / 100;
    // console.log(price);
    document.getElementById("breap").innerHTML = price;
    });
  }
  setTimeout(getBreapPrice, 100);
  setInterval(getBreapPrice, 2000);

  function getReapPrice() {
    $.get("https://graphs.coinpaprika.com/currency/data/r34p-r34p/1q/?quote=usd", function(data) {
      let price2 = data[0].price.slice(-1);
      let price = price2[0][1];
      price = Math.round(price * 100) / 100;
    // console.log(price);
    document.getElementById("reap").innerHTML = price;
    });
  }
  setTimeout(getReapPrice, 100);
  setInterval(getReapPrice, 2000);
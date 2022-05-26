var $WEB3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.defibit.io:443"));


$ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"ref","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountEggs","type":"uint256"}],"name":"SeedsBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"ref","type":"address"},{"indexed":false,"internalType":"uint256","name":"seedsUsed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marketSeeds","type":"uint256"}],"name":"SeedsPlanted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"seedsSold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seedValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marketSeeds","type":"uint256"}],"name":"SeedsSold","type":"event"},{"inputs":[],"name":"BusdAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DripAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DripBusdLp","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DripVaultAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MarketingAndDevelopmentAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PancakeSwapRouter","outputs":[{"internalType":"contract IUniswapV2Router01","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PancakeSwapRouterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SEEDS_TO_GROW_1PLANT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buySeeds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"seeds","type":"uint256"}],"name":"calculateSeedSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateSeedsBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"}],"name":"calculateSeedsBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"}],"name":"calculateSeedsBuySimpleBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"}],"name":"calculateSeedsBuySimpleTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"}],"name":"calculateSeedsBuySimpleTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateSeedsBuyTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rt","type":"uint256"},{"internalType":"uint256","name":"rs","type":"uint256"},{"internalType":"uint256","name":"bs","type":"uint256"}],"name":"calculateTrade","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedSeeds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentBalanceMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTimeMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"devFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyPlants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMySeeds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getSeedsSinceLastPlant","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserSeeds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hatcheryPlants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastPlant","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketSeeds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"plantSeeds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"seedMarket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellSeeds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_top","type":"uint256"},{"internalType":"uint256","name":"multiplier","type":"uint256"}],"name":"setBalanceMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_seed","type":"uint256"}],"name":"setSeedAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var $Contract = new $WEB3.eth.Contract($ABI, "0x685BFDd3C2937744c13d7De0821c83191E3027FF");

$ABI_LP = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var $Contract_LP = new $WEB3.eth.Contract($ABI_LP, "0xa0feB3c81A36E885B6608DF7f0ff69dB97491b58");

var $PCS_API = "https://api.pancakeswap.info/api/v2/tokens/";

  onload = function () {
    //console.log('Session address: ' +sessionStorage.getItem("address"));
    if (sessionStorage.getItem("address") !== '' && sessionStorage.getItem("address") !== null) {
      document.getElementById("walletAddress").value = sessionStorage.getItem("address");
      document.getElementById('click').click();
    }
  };

    var gardenData = new Vue({
      el: '#garden',
      data: {
        wallet_address:'',
        plants: '0',
        drip_price:'0',
        busd_price:'0',
        drip_reserve:'0',
        busd_reserve:'0',
        total_supply:'0',
        drip_busd_lp_ratio: '0',
        seeds_per_day:'0',
        plant_value_lp:'0',
        plant_value_lp_round: '0',
        seeds_available:'0',
        seeds_available_split:'0',
        plants_ready:'0',
        plants_ready_round: '0',
        plants_ready_floor: '0',
        plants_per_day:'0',
        contract_balance:'0',
        lp_in_wallet:'0',
        lp_value_in_wallet: '0',
        value_per_day: '0',
        seeds_value_lp:'0',
        seeds_value_lp_round: '0',
        seeds_lost:'0',
        seeds_lost_value: '0',
        seeds_lost_split: '0',
        drip_busd_lp_price:'0',
        seeds_to_plant:'2592000',
        seeds_from_plant: '86400',
        plant_price: '0',
        available_lp: '0',
        available_value: '0',
        garden_value: '0',
        plant_time: '0',
        next_plant: '0',
        date_in_seconds: '0',
        next_plant_time: '0',
        next_plant_time_seconds: '0',
        next_plant_time_miliseconds: '0',
        msg: '',
        go: '0',
        plantz: [],
      },

      created: function () {
        setTimeout(this.dripBusdLpCalc, 100);
        setInterval(this.dripBusdLpCalc, 3000);
        setTimeout(this.getData, 100);
        setInterval(this.getData, 3000);
      },

      methods: {

        submit () {
          let submitValue = document.getElementById("walletAddress").value;
          submitValue = submitValue.toLowerCase();
          submitValue = submitValue.trim();
          if (submitValue.length == 40) {
              submitValue = "0x" +submitValue;
            }
            //$WEB3.utils.toChecksumAddress(submitValue);
          if (submitValue.length == 42 && $WEB3.utils.isAddress(submitValue)) {
            this.msg = '';
            sessionStorage.setItem("address", submitValue);
            document.getElementById("walletAddress").value = sessionStorage.getItem("address");
            this.wallet_address = sessionStorage.getItem("address");
            setTimeout(this.getDataByWalletAddress, 100);
            setInterval(this.getDataByWalletAddress, 1000);
            this.gopressed ();
          }
          else {
            gardenData.msg = 'Incorrect address! Please check your wallet address.';
          }
        },

        gopressed () {
          if (this.go == 0) {
            gardenData.go++;
            this.move();
          }
        },

        convertHMS (value) {
          const sec = parseInt(value, 10); // convert value to number if it's string
          let hours   = Math.floor(sec / 3600); // get hours
          let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
          let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
          if (hours   < 10) {hours   = "0"+hours;}
          if (minutes < 10) {minutes = "0"+minutes;}
          if (seconds < 10) {seconds = "0"+seconds;}
          return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
        },

        toDate (value) {
          const getDate = new Date(value);
          let day = getDate.getDate();
          let month = getDate.getMonth();
          let year = getDate.getFullYear();
          let hours   = getDate.getHours();
          let minutes = getDate.getMinutes();
          let weekDay = getDate.getDay();
          var monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ];
          var dayNames = [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
          ];
          function pad(n) {
          return n<10 ? '0'+n : n
          }
          return pad(day) + "-" + monthNames[month] + "-" + year +', ' +dayNames[weekDay] +", " +pad(hours) +':' +pad(minutes)  ;
          },

        calculator () {
          gardenData.lp_value_in_wallet = Math.floor(this.lp_in_wallet * this.drip_busd_lp_price *100) / 100;
          gardenData.value_per_day = Math.floor(this.plants_per_day * this.plant_price *100) / 100;
          gardenData.seeds_lost = this.seeds_available - Math.floor(this.plants_ready)*this.seeds_to_plant;
          gardenData.seeds_lost_split = this.seeds_lost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          gardenData.seeds_lost_value = Math.floor(this.plant_price / (this.seeds_to_plant / this.seeds_lost) *100) / 100;
          gardenData.seeds_per_day = (this.plants*this.seeds_from_plant).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          gardenData.plants_per_day = Math.floor(this.plants*this.seeds_from_plant / this.seeds_to_plant* 100) / 100;
          gardenData.plants_ready = this.seeds_available/this.seeds_to_plant;
          gardenData.plants_ready_round = Math.floor(this.seeds_available/this.seeds_to_plant * 100) / 100;
          gardenData.plants_ready_floor = Math.floor(this.seeds_available/this.seeds_to_plant);
          gardenData.plant_price = Math.floor(this.plant_value_lp * this.drip_busd_lp_price*1000)/1000;
          gardenData.available_value = Math.floor(this.seeds_value_lp * this.drip_busd_lp_price*100)/100;
          gardenData.garden_value = Math.floor(this.plants * this.plant_value_lp*this.drip_busd_lp_price*100)/100;
          //Get plant production time
          gardenData.plant_time = this.convertHMS(this.seeds_to_plant / this.plants);
          //Get time left till next plant ready
          gardenData.next_plant = this.convertHMS((this.seeds_to_plant / this.plants) - (this.seeds_lost / this.plants));
          //Next plant date and time
          gardenData.date_in_seconds = new Date().getTime() / 1000; // in seconds (*1000 for miliseconds)
          gardenData.next_plant_time_seconds = (this.date_in_seconds + this.seeds_to_plant / this.plants - this.seeds_lost / this.plants);
          gardenData.next_plant_time_miliseconds = (this.date_in_seconds + this.seeds_to_plant / this.plants - this.seeds_lost / this.plants)*1000;
          gardenData.next_plant_time = this.toDate(this.next_plant_time_miliseconds);
          this.printTimer ();
        },

        printTimer () {
          //Get next plants date
                this.plantz = [];
                if (this.plants == 0) {
                  this.plant_time = '---';
                  this.next_plant = '---';
                  this.plantz.push({ plant: 'Next', nr: (this.plants_ready_floor+1), time: '---' })
                  for (let i = 2; i <= 500; i++) {
                  this.plantz.push({ plant: 'Plant', nr: (this.plants_ready_floor+i), time: '---' })
                  }
                }
                else {
                  this.plantz.push({ plant: 'Next', nr: (this.plants_ready_floor+1), time: this.next_plant_time })
                  for (let i = 2; i <= 500; i++) {
                    this.plantz.push({ plant: 'Plant', nr: (this.plants_ready_floor+i), time: (this.toDate((this.next_plant_time_seconds + (i-1)*(this.seeds_to_plant / this.plants))*1000)) })
                  }
                }
        },

        getData () {
        //Get 1 plant value in LP
        $Contract.methods.calculateSeedSell(2592000).call(function(error, result) {
          if (error) {console.log(error); return false;};
          gardenData.plant_value_lp = result*0.000000000000000001*0.95;
          gardenData.plant_value_lp_round = Math.floor(result*0.000000000000000001*950) / 1000;
          gardenData.calculator ();
        });
        //Get contract balance
        $Contract.methods.getBalance().call(function(error, result) {
          if (error) { console.log(error); return false; };
          gardenData.contract_balance = Math.floor(result*0.000000000000000001) / 1;
          gardenData.contract_balance = gardenData.contract_balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        });
        //Get total supply
        $Contract_LP.methods.totalSupply().call(function(error, result) {
          if (error) { console.log(error); return false; };
          gardenData.total_supply = result;
          gardenData.dripBusdLpCalc ();
        });
        //Get drip and busd reserve
        $Contract_LP.methods.getReserves().call(function(error, result) {
          if (error) { console.log(error); return false; };
          gardenData.drip_reserve = parseInt(result._reserve0);
          gardenData.busd_reserve = parseInt(result._reserve1);
          gardenData.dripBusdLpCalc ();
        });
        //Get drip price
        $Contract_LP.methods.token0().call(function(error, result) {
          if (error) { console.log(error); return false; };
          $.get($PCS_API + result, function (data) {
            dripPrice = parseFloat(data.data.price);
            gardenData.drip_price = dripPrice;
          gardenData.dripBusdLpCalc ();
          });
        });
        //Get busd price
        $Contract_LP.methods.token1().call(function(error, result) {
          if (error) { console.log(error); return false; };
          $.get($PCS_API + result, function (data) {
            busdPrice = parseFloat(data.data.price);
            gardenData.busd_price = busdPrice;
            gardenData.dripBusdLpCalc ();
          });
        });
        },

        //Calculate Drib Busd LP price
        dripBusdLpCalc () {
          if (gardenData.total_supply > 0 && gardenData.drip_reserve > 0 && gardenData.busd_reserve > 0 && gardenData.drip_price > 0 && gardenData.busd_price > 0) {
            gardenData.drip_busd_lp_ratio = (1 / gardenData.total_supply);
            gardenData.drip_busd_lp_price = (gardenData.drip_reserve * gardenData.drip_busd_lp_ratio * gardenData.drip_price)
                                            + (gardenData.busd_reserve * gardenData.drip_busd_lp_ratio * gardenData.busd_price);
            gardenData.drip_busd_lp_price = Math.floor(gardenData.drip_busd_lp_price * 1000) / 1000;
            gardenData.calculator ();
          }
          else {
            //console.log ('Not enough values to calculate drip/busd Lp price!')
            }
        },

        getDataByWalletAddress () {
        //Get plants
        $Contract.methods.hatcheryPlants(this.wallet_address).call(function(error, result) {
          if (error) { console.log(error); return false; };
          gardenData.plants = result;
          gardenData.calculator ();
        });
        //Get seeds available
        $Contract.methods.getUserSeeds(this.wallet_address).call(function(error, result) {
          if (error) { console.log(error); return false; };
          gardenData.seeds_available = result;
          gardenData.seeds_available_split = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          gardenData.calculator ();
          });
        //Get Drip/busd LP in wallet
        $Contract_LP.methods.balanceOf(this.wallet_address).call(function(error, result) {
          if (error) { console.log(error); return false; };
          gardenData.lp_in_wallet = Math.floor(result*0.000000000000001) / 1000;
          gardenData.calculator ();
        });
        //Get available seeds value in LP
        $Contract.methods.getUserSeeds(this.wallet_address).call(function(error, result) {
          if (error) { console.log(error); return false; };
          gardenData.seeds_value_lp = result/gardenData.seeds_to_plant*gardenData.plant_value_lp;
          gardenData.seeds_value_lp_round = Math.floor(result/gardenData.seeds_to_plant*gardenData.plant_value_lp * 1000) / 1000;
          gardenData.calculator ();
          });
        },

        //Progress bar
        move() {
        var i = 0;
          if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 0.01;
            id = setInterval(frame, 10);
              function frame() {
                var proc = Math.round(gardenData.seeds_lost/25920 *100)/100;
                  if (width >= 100 || width > proc + 0.01) {
                    clearInterval(id);
                    i = 0;
                    gardenData.move ();
                  }
                  else if (width + 6 < proc) {
                    width = Math.round((width += 0.07) *100) / 100;
                    elem.style.width = width + "%";
                    elem.innerHTML = width + "%";
                  }
                  else if (width + 2 < proc) {
                    width = Math.round((width += 0.03) *100) / 100;
                    elem.style.width = width + "%";
                    elem.innerHTML = width + "%";
                  }
                  else if (width < proc){
                    width = Math.round((width += 0.01) *100) / 100;
                    elem.style.width = width + "%";
                    elem.innerHTML = width + "%";
                  }
              }
          }
        }
    }
  })

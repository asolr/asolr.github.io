function commissions() {

  // get all the needed variables
  var commission = Number(document.getElementById("commission").value)/100;
  var price = Number(document.getElementById("price").value);
  var broker = Number(document.getElementById("broker").value)/100;
  var agent = Number(document.getElementById("agent").value)/100;

  // results
  var broker_com;
  var agent_com;
  var seller_com;

  // error if(agent + broker != 1)
  broker_com = price * commission * broker;
  agent_com = price * commission * agent;
  seller_com = price - (price * commission)
  document.getElementById("broker_com").innerHTML = "Broker = " + broker_com.toFixed(2);
  document.getElementById("agent_com").innerHTML = "Agent = " + agent_com.toFixed(2);
  document.getElementById("seller_com").innerHTML = "Seller = " + seller_com.toFixed(2);
}

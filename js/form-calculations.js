const pvmNorm = 21 / 100;

function calculateTaxableAmount(){
    let productPrice =  parseInt( document.getElementById("product_price").value);
    let transferPriceBeforeEu = parseInt( document.getElementById("transfer_price_before_eu").value);

    return  productPrice + transferPriceBeforeEu;
}

function calculateCustomsPrice(){
    let taxableAmount = parseInt(calculateTaxableAmount());
    let customsProcent = calculateCustomsProcent();

    let customsPrice = taxableAmount * customsProcent;

    return Number((customsPrice).toFixed(2)); 
}

function calculateCustomsProcent(){
    let customsProcent = document.getElementById("customs_procent").value;
    
    return customsProcent / 100;  
}

function displayCustomsPrice(){
    let customsPriceContainer = document.getElementById("customs_price");

    customsPriceContainer.innerText = calculateCustomsPrice();
}

function displayPvmPrice(){
    let pvmPriceContainer = document.getElementById("pvm_price");

    pvmPriceContainer.innerText = calculatePvmPrice();
}

function displayTotalPrice(){
    let totalPriceContainer = document.getElementById("total_price");

    totalPriceContainer.innerText = calculateTotalPrice();
}

function calculateTotalPrice(){
    let pvmPrice = calculatePvmPrice();
    let customsPrice = calculateCustomsPrice();

    return Number((pvmPrice + customsPrice).toFixed(2)); 
}

function calculateCustomsValue(){
    let taxableAmount = calculateTaxableAmount();
    let  customsPrice = calculateCustomsPrice();

    return taxableAmount + customsPrice  ;
}

function calculatePvmGround(){
    let customsValue = calculateCustomsValue();
    let transferPriceInEu = parseInt( document.getElementById("transfer_price_in_eu").value);
    let otherCosts = parseInt(document.getElementById("other_costs").value);

    return  customsValue + transferPriceInEu + otherCosts;
}

function calculatePvmPrice(){
    let pvmGround = calculatePvmGround();

    return Number((pvmGround * pvmNorm).toFixed(2)); 
}
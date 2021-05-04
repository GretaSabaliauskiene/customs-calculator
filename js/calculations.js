"use strict";

const pvmNorm = 21 / 100;

function calculateCustomsPrice() {
  let taxableAmount = parseInt(calculateTaxableAmount());
  let customsProcent = calculateCustomsProcent();

  let customsPrice = taxableAmount * customsProcent;

  return Number(customsPrice.toFixed(2));
}
function calculateTaxableAmount() {
  let productPrice = parseInt(document.getElementById("product_price").value);
  let transferPriceBeforeEu = parseInt(
    document.getElementById("transfer_price_before_eu").value
  );

  return productPrice + transferPriceBeforeEu;
}

function calculateCustomsProcent() {
  let customsProcent = document.getElementById("customs_procent").value;

  return customsProcent / 100;
}

function calculateTotalPrice() {
  let pvmPrice = calculatePvmPrice();
  let customsPrice = calculateCustomsPrice();

  return Number((pvmPrice + customsPrice).toFixed(2));
}

function calculatePvmPrice() {
  let pvmGround = calculatePvmGround();

  return Number((pvmGround * pvmNorm).toFixed(2));
}

function calculatePvmGround() {
  let customsValue = calculateCustomsValue();
  let transferPriceInEu = parseInt(
    document.getElementById("transfer_price_in_eu").value
  );
  let otherCosts = parseInt(document.getElementById("other_costs").value) || 0;

  return customsValue + transferPriceInEu + otherCosts;
}

function calculateCustomsValue() {
  let taxableAmount = calculateTaxableAmount();
  let customsPrice = calculateCustomsPrice();

  return taxableAmount + customsPrice;
}

function displayPvmPrice() {
  document.getElementById("pvm_price").innerHTML =
    calculatePvmPrice() + "<span style='color: #009c79;'> €</span>";
}

function displayTotalPrice() {
  document.getElementById("total_price").innerHTML =
    calculateTotalPrice() + "<span style='color: #009c79;'> €</span>";
}

function displayCustomsPrice() {
  document.getElementById("customs_price").innerHTML =
    calculateCustomsPrice() + "<span style='color: #009c79;'> €</span>";
}

function checkAndDisplayResults() {
  let validator = $("#calculator__form").validate();
  if (validator.form()) {
    displayCustomsPrice();
    displayPvmPrice();
    displayTotalPrice();
  }
}

function reduceFontSizeIfDoesntFit() {
  if ($("#customs_price, #pvm_price, #total_price ").height() >= 96) {
    $("#customs_price,  #pvm_price, #total_price").css("fontSize", 12);
  }
}

jQuery("#calculator__button").click(function () {
  $(this).data("clicked", true);
  checkAndDisplayResults();
  reduceFontSizeIfDoesntFit();
});

$("input").change(function () {
  if (jQuery("#calculator__button").data("clicked")) {
    checkAndDisplayResults();
    reduceFontSizeIfDoesntFit();
  }
});

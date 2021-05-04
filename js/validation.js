$(document).ready(function () {
  $("#calculator__form").validate({
    rules: {
      product_price: {
        required: true,
        minlength: 1,
        maxlength: 10,
        number: true,
        min: 0,
      },
      transfer_price_before_eu: {
        required: true,
        minlength: 1,
        maxlength: 10,
        number: true,
        min: 0,
      },
      customs_procent: {
        required: true,
        minlength: 1,
        maxlength: 4,
        number: true,
        min: 0,
      },
      transfer_price_in_eu: {
        required: true,
        minlength: 1,
        maxlength: 10,
        number: true,
        min: 0,
      },
      other_costs: {
        minlength: 1,
        maxlength: 10,
        number: true,
        min: 0,
      },
    },
    messages: {
      product_price: {
        required: "Įveskite prekės kainą",
        number: "Įveskite validų skaičių",
        min: "Įveskite sveiką skaičių",
        maxlength: "Įvestas skaičius neturėtų viršyti 10 skaitmenų",
      },
      transfer_price_before_eu: {
        required: "Įveskite atgabenimo iki EU sienos kainą",
        number: "Įveskite validų skaičių",
        min: "Įveskite sveiką skaičių",
        maxlength: "Įvestas skaičius neturėtų viršyti 10 skaitmenų",
      },
      customs_procent: {
        required: "Įveskite muito normą",
        number: "Įveskite validų skaičių",
        min: "Įveskite sveiką skaičių",
        maxlength: "Įvestas skaičius neturėtų viršyti 4 skaitmenų",
      },
      transfer_price_in_eu: {
        required:
          "Įveskite atgabenimo nuo EU sienos iki išmuitinimo vietos kainą",
        number: "Įveskite validų skaičių",
        min: "Įveskite sveiką skaičių",
        maxlength: "Įvestas skaičius neturėtų viršyti 10 skaitmenų",
      },
      other_costs: {
        number: "Įveskite validų skaičių",
        min: "Įveskite sveiką skaičių",
        maxlength: "Įvestas skaičius neturėtų viršyti 10 skaitmenų",
      },
    },
  });
});

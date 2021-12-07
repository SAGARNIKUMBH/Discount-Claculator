console.log("Discount Claculstor");
const calculate = document.querySelector(".calculate");
calculate.addEventListener("click", (e) => {
  e.preventDefault();

  const billAmt = document.getElementById("amount").value;
  //   let billAmt = document.getElementById("amount").value;
  //   var user2 = document.getElementById("c");
  //   var re = /^[7-9][0-9]{9}$/;
  //   if (re.test(user)) {
  //     alert("done");
  //     return true;
  //   } else {
  //     user2.style.border = "red solid 3px";
  //     return false;
  //   }
  const percentage = document.getElementById("discount-percentage").value;
  const discountAmt = document.getElementById("discount-amount");
  const FinalPay = document.getElementById("pay");
  discountAmt.value = (billAmt * percentage) / 100;
  FinalPay.value = billAmt - discountAmt.value;
});

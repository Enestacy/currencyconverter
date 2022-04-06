let btn = document.getElementById("BTN");

btn.onclick = convert;

function convert() {
  let o1 = document.getElementById("VAL");
  let selected_o1 = o1.options[o1.selectedIndex].value;
  let o2 = document.getElementById("VAL2");
  let selected_o2 = o2.options[o2.selectedIndex].value;
  let quantity = document.getElementById("amount").value;
  let Res = document.getElementById("converted_amount");
  
  if (selected_o1 == selected_o2) {
    Res.value = quantity;
  };
  
  let Sum;

  // текущие курсы валют
  let UR = 85;
  let RU = 0.012;
  let UE = 0.092;
  let EU = 1.09;
  let RE = 0.011;
  let ER = 91;

  // Доллары и рубли
  if (selected_o1==1 && selected_o2==2) {
    Sum = UR*quantity;
    Res.value = Sum;
  };

  if (selected_o1==2 && selected_o2==1) {
    Sum = RU*quantity;
    Res.value = Sum;
  };

  // Доллары и евро
  
  if (selected_o1==1 && selected_o2==3) {
    Sum = UE*quantity;
    Res.value = Sum;
  };

  if (selected_o1==3 && selected_o2==1) {
    Sum = EU*quantity;
    Res.value = Sum;
  };

  // Рубли и евро

  if (selected_o1==2 && selected_o2==3) {
    Sum = RE*quantity;
    Res.value = Sum;
  };

  if (selected_o1==3 && selected_o2==2) {
    Sum = ER*quantity;
    Res.value = Sum;
  };

  o1.onchange = function () {
    Res.value = " ";
  };
  o2.onchange = function () {
    convert();
  }
}

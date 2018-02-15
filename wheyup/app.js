/*
http://www.javascript-coder.com/javascript-form/javascript-calculator-script.phtml

source is shared under the terms of LGPL 3 www.gnu.org/licenses/lgpl.html
*/

var count=0;
window.onload = function(e){ 
  calculatePurity();
}
function calculatePurity(){
  var theForm = document.forms["pro-calc"];
  //reference the text box
  //var percent = theForm.elements["pro-percent"].value;
  var amt1 = theForm.elements["pro-amt1"].value;
  var amt2 = theForm.elements["pro-amt2"].value;
  var purity = ((amt1/amt2)*100).toFixed(0);
  document.getElementById('pro-percent').value = purity;
  calculateTotalPrice();

}
function calculateTotalPrice(){
  var theForm = document.forms["pro-calc"];
  //reference the text box
  var initialWeight = theForm.elements["pro-weight"].value;
  var initialCost = theForm.elements["pro-cost"].value;
  var initialPC = theForm.elements["pro-percent"].value;
  var metric = theForm.elements["metric"].value;
  var netWeight = (((initialPC)/100) * initialWeight)
  //(this.price/(real*1000)*100).toFixed(2);
  var multi=100
  var extraMulti=1
  var ending = " per 100g"
  var result= (initialCost/(netWeight*1000)*multi).toFixed(2);
  if (metric=="2"){
      ending = " per oz"
      multi=16
      extraMulti=3.5
      var oz=netWeight*multi

      result= (initialCost/oz).toFixed(2);
  }
  
  document.getElementById('cost100-calculated').innerHTML = "$" + result + ending;
  document.getElementById('hidden-result').value = result;
  document.getElementById('pro-percent-lab').style.display = 'block';
}

function addToTable(){
  var theForm = document.forms["pro-calc"];
  //reference the text box
  var initialWeight = theForm.elements["pro-weight"].value;
  var initialCost = theForm.elements["pro-cost"].value;
  var initialPC = theForm.elements["pro-percent"].value;
  var price100 = theForm.elements["hidden-result"].value;
  var metric = theForm.elements["metric"].value;
  var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

  count=count+1;
  // Insert a row in the table at row index 0
  var newRow   = tableRef.insertRow(tableRef.rows.length);
  var input = document.createElement("input");
  input.value = "Edit Me #"+count;
  input.setAttribute('class', "table-input");

  //document.getElementById("main").appendChild(div);
  // Insert a cell in the row at index 0
  var newCell  = newRow.insertCell(0);
  //var newText  = document.createTextNode("Temporary Save #"+count);

  newCell.appendChild(input);
  var newCell1  = newRow.insertCell(1);
  var newText1  = document.createTextNode(initialPC+"%");
  newCell1.appendChild(newText1);
  var resultA="$"+price100;
  var resultB="";
  if (metric=="2"){
    resultB="$"+price100;
    resultA="";
  }
  var newCell2  = newRow.insertCell(2);
  var newText2  = document.createTextNode(resultA);
  newCell2.appendChild(newText2);
  var newCell3  = newRow.insertCell(3);
  var newText3  = document.createTextNode(resultB);
  newCell3.appendChild(newText3);
}



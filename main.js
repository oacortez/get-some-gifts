const totalCost = document.getElementById('total-cost');
const tableData = document.getElementById('table-data');
let totalPrice;
let userGiftInfo


function fetchData() {
fetch("https://mysterious-mesa-00016.herokuapp.com/items")
.then(response => response.json())
.then(data => displayInfo(data))
.catch(err => console.log(err,"Something happen"))
} 


function displayInfo(data) {
  console.log(data)
  tableData.innerHTML = "";
  data.forEach(userInfo => {
    tableData.innerHTML += `
    <tr>
      <td>${userInfo.recipient}</td>
      <td>${userInfo.name}</td>
      <td>$${userInfo.priceInDollars}</td>
      <td><input type="checkbox"></td>
      </tr>
      `
  });

  totalPrice = data.reduce((acc, userInfo) => {
    acc += userInfo.priceInDollars
    return acc;
  }, 0);
  totalCost.innerText = `$ ${totalPrice}`;

}

fetchData();

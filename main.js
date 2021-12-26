const totalCost = document.getElementById('total-cost');
const tableData = document.getElementById('table-data');
const checkbox = document.querySelectorAll('.checkbox');
let totalPrice;
let userGiftInfo;
let links;

function fetchData() {
fetch("https://mysterious-mesa-00016.herokuapp.com/items")
.then(response => response.json())
.then(data => displayInfo(data))
.catch(err => console.log(err,"Something happen"))
} 

// checkbox.addEventListener('click', e => {
//     if(e.target.checked) {
//       totalprice -= userGiftInfo.priceInDollars
//     } else {
//       totalPrice;
//     }

function displayInfo(data) {
  tableData.innerHTML = "";
  data.forEach(userInfo => {
    links = userInfo.link === "" ? userInfo.name : `<a href=${userInfo.link}>${userInfo.name}</a>`
    tableData.innerHTML += `
    <tr>
      <td>${userInfo.recipient}</td>
      <td>${links}</td>
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
  };

fetchData();

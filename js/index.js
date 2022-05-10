// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  // console.log(product);

  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector(`.quantity input`);
  const subTotal = parseFloat(priceElement.innerHTML) * parseInt(quantityElement.value);

  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerHTML = subTotal;
  return subTotal;
  //... your code goes here
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 2
  //... your code goes here

  const multiProduct = document.getElementsByClassName('product');
  // console.log({multiProduct});
  // multiProduct.forEach(element => updateSubtotal(element))
  for (let i = 0; i < multiProduct.length; i += 1) {
    updateSubtotal(multiProduct[i]);
  }
  
  // ITERATION 3

  const totalPrice = document.querySelector('#total-value span')
  // console.log(totalPrice);
  const allSubTotal = document.querySelectorAll('.subtotal span')

  let totalSum = 0
  for (let i = 0; i < allSubTotal.length; i += 1) {
    // console.log(allSubTotal[i])
    totalSum += parseFloat(allSubTotal[i].innerHTML);
  }
  totalPrice.innerText = totalSum
}


 

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  // let parent = Array.from(document.getElementsByClassName('product'));
  // console.log({parent})
  // let childToRemove = 
  // parent.removeChild()
  // calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = Array.from(document.getElementsByClassName('btn btn-remove'));
  removeProductBtn.forEach(element => element.addEventListener('click', removeProduct))
  
  //... your code goes here
});

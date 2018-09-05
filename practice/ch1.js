const TAX_RATE = 10.00;         // in percentage
const PHONE_PRICE = 799.00;
const ACCESSORY_PRICE = 100.00;
const SPENDING_THRESHOLD = 899.00;

var bank_account_bal = prompt("Please enter your bank account balance: ");
bank_account_bal = Number(bank_account_bal);

function getTaxRate() {
  return TAX_RATE/100.00;
}

function getTax(price, tax_rate) {
  return price*tax_rate;
}

function priceInDollars(price) {
  console.log( "$" + price.toFixed(2) );
}

var purchase = 0.00;

while( bank_account_bal >= 0) {
  purchase += PHONE_PRICE;
  if ( purchase += ACCESSORY_PRICE <= SPENDING_THRESHOLD) {
    purchase += ACCESSORY_PRICE;
  }

  purchase += getTax(purchase, getTaxRate());

  priceInDollars(purchase);
  bank_account_bal -= purchase;
}

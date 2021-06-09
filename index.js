const stock = {
    // coffeeBeans: 250, // resolved
    coffeeBeans: 1, // rejected
    water: 1000,
}
 
const checkStock = new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 16 && stock.water >= 250) {
        resolve("Stok cukup. Bisa membuat kopi");
    } else {
        reject("Stok tidak cukup");
    }
});
 
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
 
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}
 
checkStock.then(handleSuccess, handleFailure);
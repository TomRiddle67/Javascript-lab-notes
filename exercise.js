// calculate total cost
const order = [

    {'item': 'shirt', 'price': 20, 'quantity': 2},
    {'item': 'jeans', 'price': 40, 'quantity': 1},
    {'item': 'cap', 'price': 10, 'quantity': 3}

]

const processOrders = (order) =>{
   if (!order || order.length === 0) {
    return {"error": "No orders"};
   }

   let total = 0;

   for (const item of order) {
    if (item.price < 0 || item.quantity < 0) {
        return {"error": "Invalid Order"};
    } 
    total += item.price * item.quantity;
   }


   // apply discount

    let discount = total > 50 ? total * 0.10 : 0;
    total -= discount;

    // apply tax
    let tax = total * 0.08;
    total += tax;

    return {
        discount: discount.toFixed(2),
        total: total.toFixed(2),
        tax: tax.toFixed(2)
    };
};

processOrders()
console.log(processOrders(order))


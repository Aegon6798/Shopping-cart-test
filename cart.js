const Item = require('./item');
class Cart{
    constructor(){
        this.items = [];
    }

    addItem(item, quantity){
        if(!(item instanceof Item)) {
        return "Only instance of item can be entered into the cart";
        }
        if(item.quantity < quantity) {
            return `quantity can not be morethan ${item.quantity}`
        }

        const existingItem = this.items.find(entry => entry.id == item.id);
        if(existingItem) {
            existingItem.quantity += quantity;
            return('Item quantity in cart updated')
        } else{
             this.items.push({item,quantity})
             return ("New item added successfully")
        }

    }
}
module.exports = Cart;















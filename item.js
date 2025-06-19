class Item {
    constructor({id, name, price, quantity=1}){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity
    }


}
module.exports = Item;


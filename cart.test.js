const Cart = require('./cart');
const Item = require('./item');

describe('Shopping Cart', () => {
    it("should check if a proper item is inserted", () => {
        const cart = new Cart();
        const item = "I don't belong here"
      
        const response = cart.addItem(item,1)

        expect(response).toEqual("Only instance of item can be entered into the cart")

    })
    it("should add an item to a cart", () => {
        const cart = new Cart();
        const item = new Item({id:1, name:"airpods", 
        price:5000, quantity:10})

        const response = cart.addItem(item, 1)

        expect(response).toEqual("Item added successfully")

    })
})
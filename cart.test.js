const Cart = require('./cart');
const Item = require('./item');

describe('Shopping Cart', () => {
    it("should check if a proper item is added to cart", () => {
        const cart = new Cart();
        const item = "I don't belong here"
      
        const response = cart.addItem(item,1)

        expect(response).toEqual("Only instance of Item can be entered into the cart")
        cart.emptyCart()
    })

    it("should add a new item to a cart", () => {
        const cart = new Cart();
        const item = new Item({id:1, name:"airpods", 
        price:5000, quantity:10})

        const response = cart.addItem(item, 1)

        expect(response).toEqual("New item added successfully")
        cart.emptyCart();
    })

    it("should update quantity when an existing item is added", () =>{
        const cart = new Cart();
        const item = new Item({id:1, name:"airpods", 
        price:5000, quantity:10})

        cart.addItem(item, 1)
        const response = cart.addItem(item,1)
        
        expect(response).toEqual("item quantity in cart increased")
        cart.emptyCart();
    })

    it("should show an error when removing an item that is not found in cart", () => {
        const cart = new Cart();
        const item1 = new Item({id:1, name:"airpods", 
        price:5000, quantity:10});
        const item2 = new Item({id:2, name: "charger",
        price: 1500, quantity: 5})

        cart.addItem(item1, 2)
        const response = cart.removeItem(item2, 3)

        expect(response).toEqual("Item to be removed not found in cart")
        cart.emptyCart()
    })

    it("should show an error when quantity of item to be added is morethan the quantity available", () => {
        const cart = new Cart();
        const item = new Item({id:1, name:"airpods", 
        price:5000, quantity:10})

        const response = cart.addItem(item, 12)
        expect(response).toEqual("quantity to be added is morethan the quantity available")
        cart.emptyCart()
    })

    it("should remove an item completely from cart", () => {
        const cart = new Cart();
        const item = new Item({id:1, name:"airpods", 
        price:5000, quantity:10})

        cart.addItem(item, 2)
        const response = cart.removeItem(item, 2)

        expect(response).toEqual("item removed from cart")
        cart.emptyCart()
    })

    it("should reduce quantity of an item in cart", () => {
        const cart = new Cart();
        const item = new Item({id:1, name:"airpods", 
        price:5000, quantity:10})

        cart.addItem(item, 5)
        const response = cart.removeItem(item, 3)

        expect(response).toEqual("item quantity in cart reduced")
        cart.emptyCart()

    })

    it("should calculate the total for items in cart", () => {
        const cart = new Cart();
        const item1 = new Item({id:1, name:"airpods", 
        price:5000, quantity:10});
        const item2 = new Item({id:2, name: "charger",
        price: 1500, quantity: 5})

        cart.addItem(item1, 2)
        cart.addItem(item2, 1)
        const response = cart.calculateTotal()

        expect(response).toEqual(11500)
        cart.emptyCart()

    })
})
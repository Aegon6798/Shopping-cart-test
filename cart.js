const Item = require('./item');

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, quantity) {
    if (!(item instanceof Item)) {
      return 'Only instance of Item can be entered into the cart';
    }
    if (item.quantity < quantity) {
      return 'quantity to be added is morethan quantity available';
    }

    const existingEntry = this.items.find(e => e.item.id === item.id);

    if (existingEntry) {
      existingEntry.quantity += quantity;
      return 'item quantity in cart increased';
    }

    this.items.push({ item, quantity });
    return 'New item added successfully';
  }

  removeItem(item, quantityToRemove = 1) {
    const itemId = item instanceof Item ? item.id : item;
    const idx = this.items.findIndex(e => e.item.id === itemId);

    if (idx === -1) {
      return 'Item to be removed not found in cart';
    }

    const entry = this.items[idx];

    if (quantityToRemove >= entry.quantity) {
      this.items.splice(idx, 1);
      return 'item removed from cart';
    }

    entry.quantity -= quantityToRemove;
    return 'item quantity in cart reduced';
  }

  emptyCart() {
    this.items.length = 0;
  }

  calculateTotal() {
    return this.items.reduce(
      (sum, e) => sum + e.item.price * e.quantity,
      0
    );
  }
}

module.exports = Cart;

import Cart from '../controllers/Cart';

test('new card should be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
});
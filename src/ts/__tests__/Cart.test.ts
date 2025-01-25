import Cart from '../controllers/Cart';
import Book from '../models/Book';
import Movie from '../models/Movie';
import MusicAlbum from '../models/MusicAlbum';
import Notebook from '../models/Notebook';
import Countable from '../models/interfaces/Countable';

const cart = new Cart();

test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
});

test('card should add item only once the same', () => {
    const movie = new Movie("зеленая миля", 200, 'The Green Mile', false, "https:\\google\rt.img", 2000, "USA", "Love electricity", "drama", 189);
    cart.add(movie, 1);
    cart.add(movie, 2);
    expect(movie instanceof Countable).toBe(false);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].count).toBe(1);
    expect(movie.id).toBe(1);
});

test('card should count Countable item', () => {
    const note = new Notebook('HP', 20000, 'good');
    cart.add(note, 1);
    cart.add(note, 2);
    expect(note instanceof Countable).toBe(true);
    expect(cart.getCountByItem(note)).toBe(3);
    expect(note.id).toBe(2);
});

test('Test sum and sum with discount', () => {
    expect(cart.sum()).toBe(60200);
    expect(cart.sumWithDiscount(10)).toBe(54180);
});


test('test decrease count', () => {
    cart.decrease(2, 1);
    expect(cart.getCountById(2)).toBe(2);
    cart.decrease(1);
    expect(cart.items.length).toBe(1);
    expect(cart.getCountById(1)).toBe(0);

});

test('test throw error when nothing to decrease', () => {
    expect(() => cart.decrease(1)).toThrow('Item not found');
});


test('test delete item', () => {
    const album = new MusicAlbum('Meteora', 'Linkin Park', 900)
    cart.add(album);
    expect(cart.items.length).toBe(2);
    cart.deleteById(2);
    expect(cart.items.length).toBe(1);
    cart.deleteItem(album);
    expect(cart.items.length).toBe(0);
});
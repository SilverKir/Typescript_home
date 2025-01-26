import Cart from "./controllers/Cart";
import Book from "./models/Book";
import Movie from "./models/Movie";
import Notebook from "./models/Notebook";

const cart = new Cart();
const note = new Notebook('HP', 20000, 'good');
cart.add(new Book('War and Peace', 'Leo Tolstoy', 2000, 1225), 6);
const movie = new Movie("зеленая миля", 124, 'The Green Mile', false, "https:\\google\rt.img", 2000, "USA", "Love electricity", "drama", 189);
cart.add(movie, 1);
cart.add(movie, 2);
cart.add(note, 2);
cart.add(note, 3);


console.log(cart.items);
console.log(cart.sum());
console.log(cart.sumWithDiscount(10));
cart.decrease(note.id);
console.log(cart.items);
cart.decrease(movie.id);
console.log(cart.items);

import Buyable from "../models/interfaces/Buyable";
import Countable from "../models/interfaces/Countable";

export default class Cart {
    private products: {
        product: Buyable,
        count: number
    }[] = [];

    sum(): number {
        return this.products.reduce((acc, item) => acc + item.product.price * item.count, 0);
    }

    sumWithDiscount(discount: number): number {
        return this.sum() * (1 - discount / 100);
    }


    private findIndexByID(id: number): number {
        return this.products.findIndex(item => item.product.id === id);
    }


    private decrease(id: number, count: number): void {
        const index = this.findIndexByID(id);
        if (index !== -1) {
            if (this.products[index].count > count) {
                this.products[index].count -= count;
            } else {
                this.deleteById(id);
            }
        } else {
            console.log("Item not found");
        }
    }

    private increase(id: number, count: number): void {
        const index = this.findIndexByID(id);
        this.products[index].count += count;
    }

    private addNewItem(item: Buyable, count: number): void {
        this.products.push(
            {
                product: item,
                count: count
            }
        )
    }



    add(item: Buyable, count: number = 1): void {
        const itemCount = item instanceof Countable ? count : 1;
        const index = this.findIndexByID(item.id);
        if (index === -1) {
            this.addNewItem(item, itemCount);
        } else if (item instanceof Countable) {
            this.increase(item.id, itemCount);
        }
    }

    remove(id: number, count: number = 1): void {
        this.decrease(id, count);
    }

    deleteItem(item: Buyable): void {
        this.deleteById(item.id);
    }


    deleteById(id: number): void {
        this.products = this.products.filter(item => item.product.id !== id);
    }

    get items(): { product: Buyable, count: number }[] {
        return [...this.products];
    }
}

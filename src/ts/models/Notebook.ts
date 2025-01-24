import Buyable from "./interfaces/Buyable";
import Countable from "./interfaces/Countable";
import getCount from "./Counter";

export default class Notebook extends Countable implements Buyable {
    readonly id = getCount()();
    constructor(
        readonly name: string,
        readonly price: number,
        readonly decription: string,
    ) {
        super();
    }
}
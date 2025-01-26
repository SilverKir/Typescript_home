import Buyable from "./interfaces/Buyable";
import Countable from "./interfaces/Countable";
import uniqid from "uniqid";

export default class Notebook extends Countable implements Buyable {
    readonly id = uniqid()
    constructor(
        readonly name: string,
        readonly price: number,
        readonly decription: string,
    ) {
        super();
    }


}
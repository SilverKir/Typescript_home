import Buyable from "./interfaces/Buyable";
import getCount from "./Counter";

export default class Movie implements Buyable {
    readonly id = getCount()()

    constructor(
        readonly name: string,
        readonly price: number,
        readonly nameEnglish: string,
        readonly isImax: boolean,
        readonly poster: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly duration: number
    ) { }

}
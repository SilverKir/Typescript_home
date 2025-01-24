import Buyable from "./interfaces/Buyable";
import getCount from "./Counter";

export default class MusicAlbum implements Buyable {
    readonly id = getCount()()
    constructor(
        readonly name: string,
        readonly author: string,
        readonly price: number
    ) { }
}
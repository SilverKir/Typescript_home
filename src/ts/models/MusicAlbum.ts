import Buyable from "./interfaces/Buyable";
import uniqid from "uniqid";

export default class MusicAlbum implements Buyable {
    readonly id = uniqid()
    constructor(
        readonly name: string,
        readonly author: string,
        readonly price: number
    ) { }


}
import Buyable from './interfaces/Buyable';
import uniqid from 'uniqid';

export default class Book implements Buyable {
    readonly id = uniqid()
    constructor(
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly pages: number
    ) { }


}
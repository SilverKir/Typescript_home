let currentCounter = 1;
export default function getCount() {
    return function (): number {
        return currentCounter++
    }
}
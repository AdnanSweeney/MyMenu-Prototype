
export class MenuItem {
    constructor(
        public name: string,
        public imgSrc: string,
        public rating: number[],
        public numReview: number,
        public price: number,
        public ingredients: string[] ) {}
}
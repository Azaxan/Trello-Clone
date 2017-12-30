export class Card {
    title: string = '';
    boardId: number;
    columnId: number;
    order: number;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}

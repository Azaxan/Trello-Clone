export class Card {
    id: number;
    title: string = '';
    boardId: number;
    columnId: number;
    order: number;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}

export class Column {
    id: number;
    title: string = '';
    boardId: number;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}

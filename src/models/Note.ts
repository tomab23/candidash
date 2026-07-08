export default class Note{
    id: number;
    created_at: string;
    title: string;
    note: number;

    constructor(
        id: number,
        created_at: string,
        title: string,
        note: number,
    ){
        this.id = id;
        this.created_at = created_at
        this.title = title;
        this.note = note;

    }


}
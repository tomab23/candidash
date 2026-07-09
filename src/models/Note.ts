export default class Note{
    id: number;
    created_at: string;
    title: string;
    note: string;

    constructor(
        id: number,
        created_at: string,
        title: string,
        note: string,
    ){
        this.id = id;
        this.created_at = created_at
        this.title = title;
        this.note = note;

    }


}
export default class Note{
    id: string;
    created_at: string;
    title: string;
    note: string;

    constructor(
        id: string,
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
export default class Candidature{
    id: number;
    created_at: string;
    company: string;
    job: string;
    date: Date;
    status: string;
    place: string;
    link?: string;
    note?: string;
    id_user: string;

    constructor(
        id: number,
        created_at: string,
        company: string,
        job: string,
        date: Date,
        status: string,
        place: string,
        id_user: string,
        link: string,
        note: string,
    ){
        this.id = id;
        this.created_at = created_at
        this.job = job;
        this.company = company;
        this.date = date;
        this.status = status;
        this.place = place;
        this.link = link;
        this.note = note;
        this.id_user = id_user;

    }


}
export default class Test{
    id: number;
    created_at: string;
    name: string;
    age: number;
    place: string;
    id_user: string;

    constructor(
        id: number,
        created_at: string,
        name: string,
        age: number,
        place: string,
        id_user: string,
    ){
        this.id = id;
        this.created_at = created_at
        this.age = age;
        this.name = name;
        this.place = place;
        this.id_user = id_user;

    }


}
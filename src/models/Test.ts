export default class Test{
    id: number;
    created_at: string;
    name: string;
    age: number;
    place: string;
    id_user: string;
    gender: string;

    constructor(
        id: number,
        created_at: string,
        name: string,
        age: number,
        place: string,
        id_user: string,
        gender: string,
    ){
        this.id = id;
        this.created_at = created_at
        this.age = age;
        this.name = name;
        this.place = place;
        this.id_user = id_user;
        this.gender = gender

    }


}
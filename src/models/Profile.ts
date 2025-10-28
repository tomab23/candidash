export default class Profile{
    id: number;
    created_at: string;
    username: string;
    open: boolean;


    constructor(
        id: number,
        created_at: string,
        name: string,
        open: boolean,
    ){
        this.id = id;
        this.created_at = created_at
        this.username = name;
        this.open = open;

    }


}
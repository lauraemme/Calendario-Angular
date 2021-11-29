export class Event {
    id: string = "";
    name: string = "";
    date: string= "";
    info: string= "";

    constructor(id: string,name: string, date: string, info: string){
        this.id = id;
        this.name = name;
        this.date = date;
        this.info = info;
    }
}
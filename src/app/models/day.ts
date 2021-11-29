export class Day {
    day: number = 0;
    month: number = 0;
    year: number= 0;
    dateString: string= "";

    constructor(day: number, month: number, year: number){
        this.day = day;
        this.month = month;
        this.year = year;
        this.dateString = `${this.day} / ${this.month} / ${this.year}`;
    }

}
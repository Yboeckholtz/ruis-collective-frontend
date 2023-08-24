export class Event {
  name: string;
  date: Date;
  location: string;
  time: string;
  visitorsAmount: number;
  description: string;
  photo: string; // Bestand/URL

  constructor(name: string, date: Date, location: string, time: string,  visitorsAmount: number, description: string, photo: string){
     this.name = name;
     this.date = date;
     this.location = location;
     this.time = time;
     this.visitorsAmount = visitorsAmount
     this.description = description;
     this.photo = photo;
  }
}

export class FavoriteList {
  name: string;
  description: string;
  date: Date;
  time: string;
  user: string; // Foreign key to User

  constructor(name: string, description: string, date: Date, time: string, user: string) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.time = time;
    this.user = user;
  }
}

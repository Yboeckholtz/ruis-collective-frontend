export class Artist {
  name: string;
  nationality: string;
  genre: string;
  showsAmount: number[];
  photo: string; // URL van de foto
  description: string;

  constructor(name: string, nationality: string, genre: string, showsAmount: number[], photo: string, description: string) {
    this.name = name;
    this.nationality = nationality;
    this.genre = genre;
    this.showsAmount = showsAmount;
    this.photo = photo;
    this.description = description;
  }
}

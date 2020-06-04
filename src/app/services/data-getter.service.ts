import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface AkatsukiList {
  name: string;
  rank: string;
  age: number;
  acod: number;
}

@Injectable({
  providedIn: "root",
})
export class DataGetterService {
  private akatsuki: AkatsukiList[] = [
    {
      name: "Hidan",
      rank: "A",
      age: 40,
      acod: 1,
    },
    {
      name: "Tobi",
      rank: "S",
      age: 29,
      acod: 3,
    },
    {
      name: "Sasori",
      rank: "B",
      age: 30,
      acod: 2,
    },
  ];

  private skills = [
    { cod: 1, sname: "nimpo", style: "wind" },
    { cod: 1, sname: "rassengun", style: "wind" },
    { cod: 2, sname: "shadowclone", style: "earth" },
    { cod: 1, sname: "amaterasu", style: "fire" },
    { cod: 2, sname: "frogthroat", style: "water" },
    { cod: 3, sname: "frogroom", style: "water" },
    { cod: 3, sname: "chidori", style: "sunder" },
    { cod: 3, sname: "shuringun", style: "earth" },
  ];

  private userName = "";

  private users = ["Illay", "Anna", "Egor", "Alla"];

  constructor() {}

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  getAkatsuki(): Observable<AkatsukiList[]> {
    return of(this.akatsuki);
  }

  addAkatsuki(person: AkatsukiList) {
    this.akatsuki.push(person);
  }

  delAkatsuki(id) {
    this.akatsuki.splice(id, 1);
  }

  getSkills(cod: number): Observable<any[]> {
    return of(
      this.skills.filter((elem) => {
        return elem.cod === cod;
      })
    );
  }
}

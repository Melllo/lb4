import { Component } from "@angular/core";
import {
  DataGetterService,
  AkatsukiList,
} from "../services/data-getter.service";
import { SharedDataService } from "../services/shared-data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  userName: string;
  persons: AkatsukiList[];
  dataFromSkills = "";

  showNew = false;
  showEdit = -1;

  constructor(
    private dataGetter: DataGetterService,
    private sharedData: SharedDataService
  ) {
    this.dataGetter.getAkatsuki().subscribe((data) => {
      this.persons = data;
    });
    this.userName = this.dataGetter.getUser();
  }

  add() {
    this.showNew = true;
  }
  addPerson(person) {
    this.dataGetter.addAkatsuki(person);
    this.showNew = false;
  }
  delete(id: number) {
    this.dataGetter.delAkatsuki(id);
  }
  ionViewDidEnter() {
    if (this.sharedData.getTextData() != "") {
      this.dataFromSkills = this.sharedData.getTextData();
    }
  }
}

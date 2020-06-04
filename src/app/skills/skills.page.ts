import { Component, OnInit } from "@angular/core";
import { DataGetterService } from "../services/data-getter.service";
import { ActivatedRoute } from "@angular/router";
import { SharedDataService } from "../services/shared-data.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.page.html",
  styleUrls: ["./skills.page.scss"],
})
export class SkillsPage implements OnInit {
  cod: number;
  skills: any[];
  textData: string;

  constructor(
    private dataGetter: DataGetterService,
    private route: ActivatedRoute,
    private sharedData: SharedDataService
  ) {}

  ngOnInit() {
    this.cod = +this.route.snapshot.paramMap.get("cod");
    this.dataGetter.getSkills(this.cod).subscribe((data) => {
      this.skills = data;
    });
  }

  passData() {
    this.sharedData.setTextData(this.textData);
  }
}

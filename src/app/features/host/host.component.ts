import { Component } from "@angular/core";
import { NzButtonModule } from "ng-zorro-antd/button";
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { ExperienceComponent } from "../experience/experience.component";
import { EducationComponent } from "../education/education.component";
import { CommonModule } from "@angular/common";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: "app-host",
  imports: [
    NzButtonModule,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    EducationComponent,
    NzLayoutModule,
    NzGridModule,
    CommonModule,
    NzIconModule,
    SkillsComponent,
  ],
  templateUrl: "./host.component.html",
  styleUrl: "./host.component.less",
})
export class HostComponent {
  language: string = "en";

  toggleLanguage() {
    this.language = this.language === "en" ? "pt" : "en";
  }
}

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzLayoutModule } from "ng-zorro-antd/layout";

@Component({
  selector: "app-experience",
  imports: [NzLayoutModule, NzGridModule, CommonModule, NzIconModule],
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.less",
})
export class ExperienceComponent {
  experiences = [
    {
      company: "Company One",
      role: "Software Developer",
      duration: "Jan 2020 - Present",
      description:
        "Worked on building scalable web applications using Angular and Node.js.",
    },
    {
      company: "Company Two",
      role: "Frontend Developer",
      duration: "Jun 2018 - Dec 2019",
      description:
        "Developed responsive user interfaces and collaborated with backend teams.",
    },
    // Add more experiences as needed
  ];
}

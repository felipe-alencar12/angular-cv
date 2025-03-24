import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NzTimelineModule } from "ng-zorro-antd/timeline";

@Component({
  selector: "app-education",
  imports: [NzTimelineModule, CommonModule],
  templateUrl: "./education.component.html",
  styleUrl: "./education.component.less",
})
export class EducationComponent {
  educationItems = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of São Paulo (USP)",
      year: "2017 - 2021",
      description:
        "Focused on software development, algorithms, and data structures. Participated in various coding competitions and student-led projects.",
    },
  ];
}

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-skills",
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.less",
})
export class SkillsComponent {
  skills = [
    { name: "Angular", level: 80 }, // level from 0 to 100
    { name: "JavaScript", level: 85 },
    { name: "CSS", level: 70 },
    { name: "Java", level: 75 },
    { name: "AWS", level: 60 },
    { name: "Git", level: 90 },
  ];
}

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
    {
      name: "Angular",
      description:
        "I have extensive experience building dynamic, single-page applications using Angular, utilizing components, services, and reactive programming techniques.",
    },
    {
      name: "JavaScript",
      description:
        "JavaScript is the backbone of my front-end development. I use it to create interactive and engaging web applications, especially with frameworks like Angular and React.",
    },
    {
      name: "AWS",
      description:
        "I have worked with several AWS services including S3, EC2, and Lambda to deploy scalable and efficient cloud applications.",
    },
    {
      name: "CSS",
      description:
        "CSS is essential for styling web applications. I am proficient in creating responsive layouts and ensuring cross-browser compatibility.",
    },
  ];
}

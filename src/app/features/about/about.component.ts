import { Component } from "@angular/core";
import { NzLayoutModule } from "ng-zorro-antd/layout";

@Component({
  selector: "app-about",
  imports: [NzLayoutModule],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.less",
})
export class AboutComponent {
  aboutText: string =
    "I am a passionate web developer with a focus on creating modern and scalable applications. I enjoy learning new technologies and solving complex problems.";
}

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzLayoutModule } from "ng-zorro-antd/layout";

@Component({
  selector: "app-contact",
  imports: [NzLayoutModule, NzGridModule, CommonModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.less",
})
export class ContactComponent {
  name: string = "Felipe Alencar";
  contact: string = "felipe@example.com";
  country: string = "Brazil";
  state: string = "São Paulo";
  phone: string = "+55 11 99999-9999";
  linkedIn: string = "https://www.linkedin.com/in/felipealencar12/";
  gitHub: string = "https://github.com/felipe-alencar12";

  contactItems = [
    { label: "Name", value: this.name },
    { label: "Contact", value: this.contact, link: "mailto:" + this.contact },
    { label: "Country", value: this.country + " - " + this.state },
    { label: "Phone", value: this.phone },
    { label: "LinkedIn", value: this.linkedIn, link: this.linkedIn },
    { label: "GitHub", value: this.gitHub, link: this.gitHub },
  ];
}

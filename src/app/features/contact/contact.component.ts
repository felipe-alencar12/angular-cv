import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzLayoutModule } from "ng-zorro-antd/layout";

@Component({
  selector: "app-contact",
  imports: [NzLayoutModule, NzGridModule, CommonModule, NzIconModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.less",
})
export class ContactComponent {
  name: string = " Felipe Alencar";
  contact: string = "gia.comini@hotmail.com";
  country: string = "Brazil";
  state: string = "São Paulo";
  phone: string = "+55 11 95119-2674";
  linkedIn: string = "https://www.linkedin.com/in/felipealencar12/";
  gitHub: string = "https://github.com/felipe-alencar12";

  contactItems = [
    {
      value: "Felipe Alencar Giacomini",
      style: "font-size: 20px; font-weight: bold;color:#1890ff;;",
    },
    {},
    {
      value: "gia.comini@hotmail.com",
      style: "font-size: 16px;",
    },
    { value: "Brazil - São Paulo", style: "font-size: 16px;" },
    { value: "+55 11 95119-2674", style: "font-size: 16px;" },
    {
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/felipealencar12/",
      icon: "linkedin",
      style: "color: #0e76a8;",
    },
    {
      value: "GitHub Profile",
      link: "https://github.com/felipe-alencar12",
      icon: "github",
      style: "color: #333;",
    },
  ];
}

import { Component } from "@angular/core";
import { NzButtonModule } from "ng-zorro-antd/button";
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: "app-host",
  imports: [NzButtonModule, HeaderComponent, AboutComponent, ContactComponent],
  templateUrl: "./host.component.html",
  styleUrl: "./host.component.less",
})
export class HostComponent {}

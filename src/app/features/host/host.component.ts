import { Component } from "@angular/core";
import { NzButtonModule } from "ng-zorro-antd/button";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-host",
  imports: [NzButtonModule, HeaderComponent],
  templateUrl: "./host.component.html",
  styleUrl: "./host.component.less",
})
export class HostComponent {}

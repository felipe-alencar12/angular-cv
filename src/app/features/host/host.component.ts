import { Component } from "@angular/core";
import { NzButtonModule } from "ng-zorro-antd/button";

@Component({
  selector: "app-host",
  imports: [NzButtonModule],
  templateUrl: "./host.component.html",
  styleUrl: "./host.component.less",
})
export class HostComponent {}

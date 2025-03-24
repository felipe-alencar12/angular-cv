import { Component } from "@angular/core";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule } from "ng-zorro-antd/icon";

@Component({
  selector: "app-header",
  imports: [NzLayoutModule, NzMenuModule, NzIconModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.less",
})
export class HeaderComponent {
  title = "x";
  subtitle = "y";
}

import { Component, OnInit, OnDestroy } from "@angular/core";
import {RestApiService} from "../../../rest-api.service";

@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html"
})
export class ProfilepageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  equipos: any;
  id:any;
  constructor(public api:RestApiService) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");

    this.api.getTabla().then( data => {
      this.equipos = data["table"];
      console.log(this.equipos);
    });
    this.id=this.api.equipo;
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}

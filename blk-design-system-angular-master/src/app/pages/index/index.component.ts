import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import {RestApiService} from "../../rest-api.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  equipos: string;
  equipo = [];
  data = [];
  constructor(public api:RestApiService,
              private router:Router) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    // var slider = document.getElementById("sliderRegular");

    // noUiSlider.create(slider, {
    //   start: 40,
    //   connect: false,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });
    //
    // var slider2 = document.getElementById("sliderDouble");
    //
    // noUiSlider.create(slider2, {
    //   start: [20, 60],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });
    //
    this.equipos=localStorage.getItem('equipos');
    this.equipo = this.equipos.split('/');
    this.equipo.pop();
    console.log(this.equipo);

    this.equipo.forEach((f) => {
        this.api.getEquipo(f).then(j => {
            this.data.push(j["teams"]);
        });
    });
    console.log(this.data);
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
  enviar(id){
    this.api.equipo=id;
    console.log(id);
    this.router.navigate(['register']);
  }
}

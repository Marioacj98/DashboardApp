import { Component, OnInit, OnDestroy } from "@angular/core";
import Chart from "chart.js";
import {RestApiService} from "../../../rest-api.service";
import {forEachComment} from "tslint";
import {Router} from "@angular/router";
import {CookiesService} from "../../../cookies.service";

@Component({
  selector: "app-landingpage",
  templateUrl: "landingpage.component.html"
})
export class LandingpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  equipos:any;
  favoritos = [];
  entro = [];
  constructor(private router:Router,
      public api:RestApiService) {}

  ngOnInit() {
    if (localStorage.getItem('equipos')!=null){
      this.router.navigate(['index']);
    }
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
    this.api.getEquipos().then( data => {
      this.equipos = data["teams"];
      console.log(this.equipos);
    });

    var canvas: any = document.getElementById("chartBig");
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
    var chartBig = new Chart(ctx, {
      type: "line",
      responsive: true,
      data: {
        labels: [
          "JUN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ],
        datasets: [
          {
            label: "Data",
            fill: true,
            backgroundColor: gradientFill,
            borderColor: "#e44cc4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#e44cc4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#be55ed",
            //pointHoverBorderColor:'rgba(35,46,55,1)',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        tooltips: {
          backgroundColor: "#fff",
          titleFontColor: "#ccc",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 350,
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ],

          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ]
        }
      }
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }

  checked(id, i) {
    var j=0;
    if (this.entro[i]!=true ){
    this.favoritos.push(id);
    console.log(this.favoritos);
    this.entro[i]=true;
    }else{
      j=this.favoritos.indexOf(id);
      this.favoritos.splice(j,1);
      console.log(this.favoritos);
      this.entro[i]=false;
    }
    console.log(this.entro[i]+" "+i);
    console.log(id+" checkeado");
  }

  enviar(){
    var ids="";
    this.favoritos.forEach(function (id) {
      ids=id.toString()+"/"+ids;
    });
    if (this.favoritos!=null || this.favoritos!=[])
    localStorage.setItem('equipos',ids);
    this.router.navigate(['index']);
  }
}

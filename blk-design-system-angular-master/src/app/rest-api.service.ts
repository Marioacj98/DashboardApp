import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  equipo:any;

  constructor(private http:HttpClient) { }

  private apiEquipos="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?";
  private apiEquipo="https://www.thesportsdb.com/api/v1/json/1/lookupteam.php";
  private apiTabla="https://www.thesportsdb.com/api/v1/json/1/lookuptable.php";

  getEquipos(){
    return new Promise(resolve => {
      this.http.get(this.apiEquipos,{params: {l:"English Premier League"}}).subscribe(data =>{
        resolve(data);
        // print(data);
          },error =>{
        console.log(error);
          }
      )
    });
  }

  getEquipo(id){
    return new Promise(resolve => {
      this.http.get(this.apiEquipo,{params: {id:id}}).subscribe(data =>{
            resolve(data);
            // print(data);
          },error =>{
            console.log(error);
          }
      )
    });
  }
  getTabla(){
    return new Promise(resolve => {
      this.http.get(this.apiEquipos,{params: {l:"4328",s:"1920"}}).subscribe(data =>{
            resolve(data);
            // print(data);
          },error =>{
            console.log(error);
          }
      )
    });
  }

}

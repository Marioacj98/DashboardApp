import { Injectable } from '@angular/core';
import { CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookie:CookieService) { }

  setCookie(name,valor){
    this.cookie.set(name,valor);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class CourcesProvider {


  url = "assets/codetribe.json"
  constructor(public http: HttpClient) {
  
  }
  getCourses() {

    return this.http.get(this.url)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  public myURL = "http://localhost/kk2";

  constructor(private httpClient: HttpClient) { 

  }

  public check(): void {
    this.httpClient.get<object>(this.myURL + "/api/values/8").subscribe((resp)=> {
      console.log(resp);
    }, (err) => console.log(err));
  }

  public hola(): void {
    this.httpClient.get<object>(this.myURL+"/api/values/hola").subscribe((resp)=> {
      console.log(resp);
    }, (err) => console.log(err));
  }

}

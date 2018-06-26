import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  public myURL = "https://pruebaazure20180620024957.azurewebsites.net";

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

  public sendPushSubscription(obj: any) : void
  {
    this.httpClient.post<object>(this.myURL+"/api/values/pushsubscription",obj).subscribe((resp)=> {
      console.log(resp);
    }, (err) => console.log(err));
  }

}

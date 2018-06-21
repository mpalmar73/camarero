import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private myServiceService: MyServiceService) {

  }

  public click() { 
    this.myServiceService.check();
  }

  public hola() {
    this.myServiceService.hola();
  }
}

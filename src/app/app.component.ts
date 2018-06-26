import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Navigation } from 'selenium-webdriver';
import { SwPush } from '@angular/service-worker';

declare class TextDecoder {
  constructor( codeText: string);
  constructor();
  decode(obj: any) : string;
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public _mysub;

  public VAPID = {"publicKey":"BOm35AwtFy7o68hyUGT885NUJRAfQmXUppMtxQAPj9bA4jptTBJwxWaZ3o5htIJ9-3JVK1FaFiD2TAlDXfWvX7c","privateKey":"kgxLSyG3BrMcbaCX9kbDmDcGYuSGl3pIT_5hc8TVCIM"}


  constructor(private myServiceService: MyServiceService, private swPush: SwPush) {
    if ((<any> Notification).permission !== 'granted')
      Notification.requestPermission( (status) => {
      console.log("Result of requestPermission", status);
    })
    
  }

  public subscribeToNotifications() {

    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID.publicKey
    })
    .then(sub => {
      var enc: TextDecoder = new TextDecoder();
      //this.newsletterService.addPushSubscriber(sub).subscribe())
      console.log("subscription ok:", sub);
      this._mysub = sub;

      //console.log("p256dh:=",window.btoa(enc.decode(sub.getKey("p256dh"))));
      //console.log("auth:=",window.btoa(enc.decode(sub.getKey("auth"))));
    })
    .catch(err => console.error("Could not subscribe to notifications", err));
}

  public testNotification(e: Event) {
    e.preventDefault(); 
    this.subscribeToNotifications();
    if ((<any> Notification).permission === 'granted2')
      navigator.serviceWorker.getRegistration('/app').then((reg) => reg.showNotification("hello!!!"));
  }

  public askForNotification(e: Event) {
    e.preventDefault();
    console.log("Sending message to ", this._mysub);
    this.myServiceService.sendPushSubscription(this._mysub);
  }

  public click(e: Event) {
    e.preventDefault(); 
    this.myServiceService.check();
  }

  public hola() {
    this.myServiceService.hola();
  }
}

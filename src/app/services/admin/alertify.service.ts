import { Injectable } from '@angular/core';
declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message:string, alertifyOptions: Partial<AlertifyOptions>){
    alertify. set ('notifier', 'delay',alertifyOptions.delay) 
    alertify. set ('notifier', 'position',alertifyOptions.position) ;
    const msj = alertify[alertifyOptions.messageType!](message);
    if(alertifyOptions.dismissOther){
      msj.dismissOthers();
    }
  }
  dismiss(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  messageType:MessageType = MessageType.Message;
  position:Position = Position.BottomRight;
  delay:number = 3;
  dismissOther:boolean=false;

}

export enum MessageType{
  Error = "error",
  Message = "message",
  Notify =  "notify",
  Success ="success",
  Warning = "warning"
}

export enum Position{
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLef = "top-left",
  BottomCenter = "bottom-center",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left"
}
  


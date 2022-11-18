import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastrService: ToastrService) { }

  message(message:string, title:string, toastrOption:ToastrOption){
      this.toastrService[toastrOption.messageType](message, title,{
        positionClass: toastrOption.position
      });
  }
}

export class ToastrOption{
  messageType:ToastrMessageType;
  position:Position;
}

export enum ToastrMessageType{
Success= "success",
Info = "info",
Warning="warning",
Error="error"
}

export enum Position{
TopRight ="toast-top-right",
BottomRight = "toast-bottom-right",
BottomLeft = "toast-bottom-left",
TopLeft = "toast-top-left",
TopFullWidth ="toast-top-full-width",
BottomFullWidth = "toast-bottom-full-width",
TopCenter = "toast-top-center",
BottomCenter ="toast-bottom-center"
}
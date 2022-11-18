import { HttpErrorResponse } from '@angular/common/http';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base/base.component';
import {
  DeleteDialogComponent,
  DeleteState,
} from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { DialogService } from 'src/app/services/common/dialog.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { LessonService } from 'src/app/services/common/models/lesson.service';

declare var $: any;

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  constructor(
    private elementRef: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private alertifyService: AlertifyService,
    private dialogService:DialogService,
    private lessonService:LessonService
  ) {
    const img = this._renderer.createElement('img');
    img.setAttribute('src', '../../../../../assets/icons8-trash-24.png');
    img.setAttribute('style', 'cursor:pointer;');

    _renderer.appendChild(elementRef.nativeElement, img);
  }

  @Input() id: number;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @Input() controller: string;

  @HostListener('click')
  async onClick() {
    this.dialogService.openDialog({
      componentType:DeleteDialogComponent,
      data:DeleteState.Yes,
      afterClosed: async () => {
        this.spinner.show(SpinnerType.BallAtom);
        const td: HTMLTableCellElement = this.elementRef.nativeElement;
      /* await this.httpClientService
         .delete(
            {
              controller: this.controller,
            },
            this.id
          
         
            )*/
           this.lessonService.delete(this.id)

          .
          subscribe((data) => {
            $(td.parentElement).animate(
              {
                opacity: 0,
                left: '+=50',
                height: 'toogle',
              },
              700,
              () => {
                this.callback.emit();
                this.alertifyService.message("Başarıyla Silindi", {
                  dismissOther:true,
                  messageType:MessageType.Success,
                  position: Position.BottomRight
                })
              }
            );
          }, //
          (errorResponse:HttpErrorResponse)=> {
            this.spinner.hide(SpinnerType.BallAtom)
            this.alertifyService.message("Silme işlemi Sırasında Bir Hata Oluştu", {
                  dismissOther:true,
                  messageType:MessageType.Error,
                  position: Position.BottomRight
          });
        });
      }
    })
  }
    /* this.openDialog(async () => {
      this.spinner.show(SpinnerType.BallAtom);
      const td: HTMLTableCellElement = this.elementRef.nativeElement;
      await this.httpClientService
        .delete(
          {
            controller: this.controller,
          },
          this.id
        )
        .subscribe((data) => {
          $(td.parentElement).animate(
            {
              opacity: 0,
              left: '+=50',
              height: 'toogle',
            },
            700,
            () => {
              this.callback.emit();
              this.alertifyService.message("Başarıyla Silindi", {
                dismissOther:true,
                messageType:MessageType.Success,
                position: Position.BottomRight
              })
            }
          );
        }, (errorResponse:HttpErrorResponse)=> {
          this.spinner.hide(SpinnerType.BallAtom)
          this.alertifyService.message("Silme işlemi Sırasında Bir Hata Oluştu", {
                dismissOther:true,
                messageType:MessageType.Error,
                position: Position.BottomRight
        });
      });
    });
  } */

 
}

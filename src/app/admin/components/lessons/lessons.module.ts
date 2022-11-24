import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteDirective } from 'src/app/directives/admin/delete.directive';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogModule } from 'src/app/dialogs/dialog.module';
import { DeleteDirectiveModule } from 'src/app/directives/admin/delete-directive.module';
import { UpdateModule } from './update/update.module';
import { UpdateComponent } from './update/update.component';




@NgModule({
    declarations: [
        LessonsComponent,
        CreateComponent,
        ListComponent,
        UpdateComponent
    ],
    imports: [
        CommonModule,
       RouterModule.forChild([
            { path: "", component: LessonsComponent }
        ]),
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        DialogModule,
        DeleteDirectiveModule,
        //UpdateModule,
        
    ]
})
export class LessonsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import  { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import  { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import  { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        FlexLayoutModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatSelectModule,
        MatCheckboxModule
    ],
    exports: [
        FlexLayoutModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatSelectModule,
        MatCheckboxModule
    ],
    providers: []
})
export class MaterialModule { }

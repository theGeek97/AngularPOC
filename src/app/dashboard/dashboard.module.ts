import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    HeaderModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }

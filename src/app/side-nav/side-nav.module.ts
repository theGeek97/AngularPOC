import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { MenuModule} from 'primeng/menu'
import { FormsModule } from '@angular/forms';
import {MegaMenuItem} from 'primeng/api'
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    MenuModule,
    FormsModule,
    BrowserModule
  ],
  exports:[SideNavComponent]
})
export class SideNavModule { }

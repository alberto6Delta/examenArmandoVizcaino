import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';
import { MenuComponent } from '../menu/menu.component';
import { MenuListComponent } from '../menu-list/menu-list.component';

@NgModule({
  declarations: [HomeComponent, ListComponent, MenuComponent, MenuListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ]
})
export class HomeModule { }

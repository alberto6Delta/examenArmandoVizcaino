import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  display = false;
  menuList: any = [];
  username = localStorage.getItem('username');

  constructor(private _userService: UserService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.menuList = [];
    this._userService.getMenuList().subscribe( (resp: any) => {
      this.menuList = resp;
    }, err => {
      this.toastr.error("Error de conexión", "Intenta de nuevo");
    });
  }

}

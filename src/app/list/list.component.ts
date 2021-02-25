import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  descriptions: any = [];

  constructor(private _userService: UserService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.descriptions = [];
    this._userService.getDescriptionList().subscribe( (resp: any) => {
      this.descriptions = resp;
    }, err => {
      this.toastr.error("Error de conexión", "Intenta de nuevo");
    });
  }

}

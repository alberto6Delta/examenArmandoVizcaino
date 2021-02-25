import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/all.model';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  userMail = '';
  type = 'password';

  constructor(private _userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    if ( form.invalid ) {
      this.toastr.warning("LLenar todos los campos");
      return;
    }
    this._userService.getUser().subscribe( resp => {
      resp.forEach((data: any) => {
        if((data.email === this.userMail || data.username === this.userMail) && data.password === this.user.password) {
          localStorage.setItem('token', data.id);
          localStorage.setItem('username', data.username);
          this.router.navigate(['/home']);
        }
      });
      if (!localStorage.getItem('token')) {
        this.toastr.error("Usuario no registrado", "Intenta de nuevo");
      }
    }, err => {
      this.toastr.error("Error de conexión", "Intenta de nuevo");
    });
  }

}

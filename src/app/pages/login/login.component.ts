import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public email: string = '';
  public clave: string = '';
  public credencialesIncorrecta: string = '';

  constructor(
    private _router: Router,
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  login(): void {
    if(this.email == 'admin' && this.clave == 'admin') {
      this._router.navigate(['/admin']);
    } else {
      this.credencialesIncorrecta = 'invalido';
    }
  }

}

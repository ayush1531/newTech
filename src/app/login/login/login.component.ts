import { Component } from '@angular/core';
// import { MaterialModule } from 'src/app/material.module';
import { MaterialModule } from 'src/app/material.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public MaterialModule: MaterialModule = new MaterialModule;

}

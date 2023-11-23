import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dealership';
  logo = 'GAMA MULTIMARCAS';
  imglogo = "assets/logo.png";
  year = new Date().getFullYear();
}

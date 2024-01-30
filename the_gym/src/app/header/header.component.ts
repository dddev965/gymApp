import { Component } from '@angular/core';
import { NgBootstrapModule } from '../Modules/ng-bootstrap/ng-bootstrap.module';
import { routes } from '../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgBootstrapModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
	active = 1;
}

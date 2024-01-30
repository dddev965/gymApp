import { Component } from '@angular/core';
import { CardsComponent } from '../designModules/cards/cards.component';
import { ExcerciseDesignCardComponent } from '../designModules/excercise-design-card/excercise-design-card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CardsComponent,ExcerciseDesignCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-excercise-design-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './excercise-design-card.component.html',
  styleUrl: './excercise-design-card.component.scss'
})
export class ExcerciseDesignCardComponent {

  data = 0
  constructor(){}
  // Function to handle checkbox change event
  onCheckboxChange($event: any) {
    console.log($event);
    if ($event.target.checked === true) {
      this.data = this.data + 1
    } else {
      this.data = this.data - 1

    }
  }

}

import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataServiceService } from '../../Modules/data-service.service';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Exercise } from '../../Model/datamodel';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-excercise-design-card',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './excercise-design-card.component.html',
  styleUrl: './excercise-design-card.component.scss'
})
export class ExcerciseDesignCardComponent implements OnInit {

  data = 0
  excerser: Exercise[] = []
  id!: any
  excerciseData: any

  constructor(private http: DataServiceService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.http.getdata().subscribe((res) => {
      this.excerser = res
      // console.log(this.excerser);
      this.route.params.subscribe((params: Params) => {
        this.id = +params['id']

        const result = this.excerser.find(({ id }) => id == this.id)
        console.log(result);
        this.excerciseData = result
      })
    })





  }







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

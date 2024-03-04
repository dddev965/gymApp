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

  
  excerciseReps: any[] = []
  excercise: Exercise[] = []
  totolaReps:any[]= []
  id!: any
  excerciseData: any
  bodyPart?:string
  bgImage?:string

  constructor(private http: DataServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.http.getdata().subscribe((res) => {
      this.excercise = res
      this.route.params.subscribe((params: Params) => {
        this.id = +params['id']
        const result = this.excercise.find(({ id }) => id == this.id)
        this.excerciseData = result;
        this.bgImage = this.excerciseData.image
        console.log(this.excerciseData);
        
        this.bodyPart = result?.bodyPart

        // console.log(result?.Excercise);
        result?.Excercise.forEach((element, index) => {
          this.excerciseReps.push([])
          
          element.reps.forEach(element => {
            // console.log(element);
            this.totolaReps.push(element)
            
          });
          
        });
        console.log(this.totolaReps.length);

      })

    })
  }

  // Function to handle checkbox change event
  onCheckboxChange($event: any, i: number, excerciseName: string[]) {

    if ($event.target.checked) {

      this.excerciseReps[i].push(i)
      console.log(this.excerciseReps);

    } else {

      this.excerciseReps[i].pop()
      console.log(this.excerciseReps);

    }
  }


}

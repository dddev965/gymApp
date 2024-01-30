import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NgbNavModule,
    NgbModule
  ]
})
export class NgBootstrapModule { }

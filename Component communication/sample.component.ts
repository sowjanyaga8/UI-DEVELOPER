import { Component, OnInit,Output} from '@angular/core';
import {FormGroup, FormBuilder,FormArray,FormControl} from "@angular/forms";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  constructor() { }
someid = [{email: "email1"},{email:"email2"}];
myForm: FormGroup;
}

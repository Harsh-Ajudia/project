import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  constructor( private _formBuilder: FormBuilder ) { }

  // fullname: ['', Validators.required],
  //     email: [''],
  //     subject: [''],
  //     message: [''],

  ngOnInit() {
    this.contactForm = this._formBuilder.group({
      fullname: [''],
      email: [''],
      subject: [''],
      message: [''],
    });
  }

  onLoadDataClick() {
    //this.contactForm.setValue({
    this.contactForm.patchValue({
      fullname: "harsh", 
      email: "email@gmail.com",
      subject: "angular",
      message: "this is a message"
    });
  }

  onSubmit(){
    console.log(this.contactForm);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AddService } from '../../services/contacts/add.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  public contactResponse = [];
  constructor( private _formBuilder: FormBuilder, private _addContactService: AddService ) { }

  // fullname: ['', Validators.required],
  //     email: [''],
  //     subject: [''],
  //     message: [''],

  ngOnInit() {
    this.contactForm = this._formBuilder.group({
      name: [''],
      email: [''],
      subject: [''],
      message: [''],
    });
  }

  onLoadDataClick() {
    //this.contactForm.setValue({
    this.contactForm.patchValue({
      name: "harsh", 
      email: "email@gmail.com",
      subject: "angular",
      message: "this is a message"
    });
  }

  onSubmit(){
    let form = this.contactForm.value;
    this._addContactService.add(form).subscribe(
      (data) => {
        this.contactResponse = Array.from(Object.keys(data), k => data[k]);
      });
  }
}

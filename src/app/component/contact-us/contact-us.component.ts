import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AddService } from '../../services/contacts/add.service';
import { AlertService } from '../../services/_generic/alert.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  public contactResponse = [];
  constructor(private _formBuilder: FormBuilder, private _addContactService: AddService, private alertService: AlertService) { }

  ngOnInit() {
    this.contactForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
  get f() {
    return this.contactForm.controls;
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

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      this.alertService.error("There are errors in your Form!");
      return;
    }
    let form = this.contactForm.value;
    this._addContactService.add(form).subscribe(
      (data) => {
        this.contactResponse = Array.from(Object.keys(data), k => data[k]);
        this.alertService.success("Your contact Form has been submitted!");
        this.contactForm.reset();
      });
  }

  onReset() {
    this.submitted = false;
    this.contactForm.reset();
  }
}

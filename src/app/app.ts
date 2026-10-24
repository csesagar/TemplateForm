import { Component, signal, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myapp');
  @ViewChild('registrationForm') Form: NgForm;
  defaultGender: string = 'male';
  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  emailAddress: string = '';
  gender: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  userName: string = '';
  IsAgreed: boolean = false;
  genders = [
    { id: 'check-male', value: 'male', display: 'Male' },
    { id: 'check-female', value: 'female', display: 'Female' },
    { id: 'check-other', value: 'other', display: 'Prefer not to say' },
  ];

  OnFormSubmitted() {
    console.log(this.Form);
    console.log(this.Form.value.firstname);
    console.log(this.Form.controls['firstname'].value);
    this.Form.reset();

    this.firstName = this.Form.value.firstname;
    this.lastName = this.Form.value.lastname;
    this.emailAddress = this.Form.value.email;
    this.country = this.Form.value.address.country;
    this.city = this.Form.value.address.city;
    this.region = this.Form.value.address.region;
    this.postal = this.Form.value.address.postalCode;
    this.userName = this.Form.value.username;
    this.dob = this.Form.value.dob;
    this.IsAgreed = this.Form.value;
    this.Form.form.patchValue({
      gender: 'male',
      address: {
        country: 'India',
      },
    });
  }
  GenerateUsername() {
    let username = '';

    if (this.firstName.length >= 3) {
      username += this.firstName.slice(0, 3);
    } else {
      username += this.firstName;
    }

    if (this.lastName.length >= 3) {
      username += this.lastName.slice(0, 3);
    } else {
      username += this.lastName;
    }

    let datetime = new Date(this.dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    console.log(username);
    // this.Form.value.username = username;      // not valid
    // this.Form.controls['username'].setValue(username);
    // this.form.controls['username'].value = username;
    // console.log(this.form.value.username)

    // this.Form.setValue({
    //   firstname: this.Form.value.firstname,
    //   lastname: this.Form.value.lastname,
    //   email: this.Form.value.email,
    //   phone: this.Form.value.phone,
    //   dob: this.Form.value.dob,
    //   gender: this.Form.value.gender,
    //   username: username,
    //   address: {
    //     street1: this.Form.value.address.street1,
    //     street2: this.Form.value.address.street2,
    //     country: this.Form.value.address.country,
    //     city: this.Form.value.address.city,
    //     region: this.Form.value.address.region,
    //     postalCode: this.Form.value.address.postalCode
    //   }
    // })

    this.Form.form.patchValue({
      username: username,
      // address: {
      //   country: 'Japan'
      // }
    });
  }
}

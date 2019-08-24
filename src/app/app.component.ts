import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signUpForm: NgForm;
  genders = ['male' , 'female'];

  user = {
    userName: '',
    gender: '',
    question: '',
    email: ''
  };

  suggestUserName(f: NgForm) {
    const suggestedName = 'Superuser';
    f.form.patchValue({ userData: {
      userName: suggestedName
    }});
  }

  onSubmit(f: NgForm) {
    console.log(f);
    this.user.userName = f.value.userData.userName;
    this.user.email = f.value.userData.email;
    this.user.gender = f.value.gender;
    this.user.question = this.signUpForm.value.secret;
    f.form.reset();
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public ls: LoginService) {}

  title = 'app';

  model = {
    left: true,
    middle: false,
    right: false
  };

  onSubmit(form: NgForm) {
    console.log(form.value);
    // http request
     this.ls.login(form.value).subscribe(
       (response) => console.log(response),
       (error) => console.log(error)
     );
  }

}

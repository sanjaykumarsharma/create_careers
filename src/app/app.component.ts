import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public ls: LoginService, private router: Router) {

  }

  title = 'app';

  model = {
    left: true,
    middle: false,
    right: false
  };

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
}

  onSubmit(form: NgForm) {
    console.log(form.value);
    // http request
     this.ls.login(form.value).subscribe(
       (response) => console.log(response),
       (error) => console.log(error)
     );
  }

}

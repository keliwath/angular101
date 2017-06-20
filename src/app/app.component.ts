import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Routing 101';

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.navigate(['', {outlets: {portlet1: 'portlet1', portlet2: 'portlet2'}}]);
  }
}

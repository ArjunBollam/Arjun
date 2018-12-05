import { PageService } from './page.service';
import { Component } from '@angular/core';
import { OnChanges, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';
  page: String = '';
  subscription: Subscription;
    constructor(public _pageservice: PageService) {
     this.subscription =  this._pageservice.getpage().subscribe((name) => this.page = name);
    }
    ngOnInit(): void {
     }
     ngOnChanges(): void {
      console.log(this.page);
    }

}

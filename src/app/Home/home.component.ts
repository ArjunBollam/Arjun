import { PageService } from './../page.service';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    message: string;
    summary: string;
    constructor(private _pageservice: PageService) {

    }

    ngOnInit() {
        this._pageservice.setpage('home');
        this.message = 'Hi There!';
        this.summary = 'I am an IT Professional currently living in Camphill, Pennsylvannia.';
    }
}


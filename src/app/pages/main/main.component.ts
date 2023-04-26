import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    standalone: true
})

export class MainComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
        const token = localStorage.getItem('token');

        if (!token) {
            this.router.navigate(['/login'])
        }
    }


    redirect() {
        this.router.navigate(['/material'])
    }


}
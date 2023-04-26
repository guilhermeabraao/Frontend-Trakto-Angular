import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: 'material-header',
    templateUrl: './materialHeader.component.html',
    styleUrls: ['./materialHeader.component.css'],
    standalone: true
})

export class MaterialHeader {


    constructor(private router: Router) { }




    logout() {
        localStorage.clear()
        this.router.navigate(['/login'])
    }
}
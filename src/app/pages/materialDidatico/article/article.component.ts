import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { UserService } from "src/app/config/user.service";
import { Material } from "src/app/interfaces/material";
import { MaterialHeader } from "../header/materialHeader.component";
import { Router } from '@angular/router';


@Component({
    selector: 'material-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css', '../materialDidaticoGlobal.component.css'],
    standalone: true,
    imports: [CommonModule, MaterialHeader]
})

export class MaterialArticle {

    materials: Material[] = [];
    constructor(private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.userService.listDesigns().subscribe(response => {
            for (let material of response.data) {
                const cover = material.cover.raw;
                const title = material.title;
                const editor = `https://editor.trakto.io/editor/${material.id}`
                this.materials.push({ cover, title, editor })
            }
        },
            error => {
                console.log(error)
            })
    }

    allContent() {
        this.router.navigate(['/material/todos'])
    }

}
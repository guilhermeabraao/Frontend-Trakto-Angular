import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UserService } from 'src/app/config/user.service';
import { Material } from 'src/app/interfaces/material';
import { MaterialHeader } from '../header/materialHeader.component';

@Component({
    selector: 'all-content',
    templateUrl: './allContent.component.html',
    styleUrls: ['../materialDidaticoGlobal.component.css', './allContent.component.css'],
    standalone: true,
    imports: [CommonModule, MaterialHeader]
})

export class AllContent implements OnInit {

    materials: Material[] = [];

    constructor(private userService: UserService) { }

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
}
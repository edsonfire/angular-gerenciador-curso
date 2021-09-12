import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
    selector:'app-course-list', 
    templateUrl:'./course.list.component.html'
})
export class CourseListComponent implements OnInit{

curses : Course[] = [];

ngOnInit(): void {
   this.curses = [
       {
        id: 1,
        name: "Angular Básico",
        imageURL: "./assets/images/forms.png",
        price: 100,
        code: 'c1',
        duration: 6,
        rating: 5,
        releaseDate:'10/01/2020'
       },
       {
        id: 2,
        name: "Angular Intermediário",
        imageURL: "./assets/images/http.png",
        price: 250,
        code: 'c2',
        duration: 15,
        rating: 4,
        releaseDate:'22/04/2021'
       },
       {
        id: 3,
        name: "Angular Avançado",
        imageURL: "./assets/images/router.png",
        price: 350,
        code: 'c3',
        duration: 22,
        rating: 5, 
        releaseDate:'05/06/2021'
       }
   ]
}



}
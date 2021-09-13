import { Component, OnInit } from "@angular/core";
import { Course } from "./Course";
import { CourseService } from "./course.service";


@Component({
    selector:'app-course-list', 
    templateUrl:'./course.list.component.html'
})
export class CourseListComponent implements OnInit{

    constructor (private courseService: CourseService){
        this.curses = this.courseService.retrieveAll();
    }
curses : Course[] = [];

ngOnInit(): void {
   
}



}
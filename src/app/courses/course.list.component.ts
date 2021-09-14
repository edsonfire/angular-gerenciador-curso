import { Component, OnInit } from "@angular/core";
import { Course } from "./Course";
import { CourseService } from "./course.service";


@Component({
    
    templateUrl:'./course.list.component.html'
})
export class CourseListComponent implements OnInit{

    _filterBy!:string;
    _curses : Course[] = [];
    filteredCurses : Course[] = [];

    constructor (private courseService: CourseService){
        this._curses = this.courseService.retrieveAll();
        this.filteredCurses = this._curses;

    }


ngOnInit(): void {
   
}

set filter(value:string){
    this._filterBy=value;
    this.filteredCurses = this._curses.filter((course:Course)=> course.name.toLowerCase().indexOf(this._filterBy.toLowerCase())> -1);
}

get filter(){
   return  this._filterBy;
}

}
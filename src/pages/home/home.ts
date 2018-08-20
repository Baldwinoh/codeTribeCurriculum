import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourcesProvider } from './../../providers/cources/cources';
import { HttpClient } from '@angular/common/http';
import { DisplayPage } from './../display/display';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  courses: any;
  arrCourses = [];
  arrlessons = [];
  lessons:any;
  constructor(public navCtrl: NavController, private CourceProvider: CourcesProvider) {

    CourceProvider.getCourses().subscribe(results => {

      this.courses = results;
      this.arrCourses = this.courses.courses;
      console.log("response", results)

    
      this.lessons = results;
      this.arrlessons = this.lessons.lessons;
      console.log("response", this.lessons)
    });


  }

  goToDisplay(lessons:any){

    this.navCtrl.push(DisplayPage, {data:lessons});
  }

}
import { StudentsService } from '../students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(service: StudentsService) {
    this.person = this.students = service.getStudents();
  }
  person;
  students;

  allstudents() {
    this.person = this.students;
  }
  gender(gender: string) {
    this.person = this.students.filter(students => students.gender === gender)
  }

  ngOnInit(): void {
  }

}

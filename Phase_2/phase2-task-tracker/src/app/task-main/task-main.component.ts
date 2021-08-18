import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesClass } from '../employeesTask.model';

@Component({
  selector: 'app-task-main',
  templateUrl: './task-main.component.html',
  styleUrls: ['./task-main.component.css']
})
export class TaskMainComponent implements OnInit {
  addRef = new FormGroup({
    id:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    task:new FormControl("",[Validators.required]),
    date:new FormControl("",[Validators.required]),
  })
  taskEmploy:Array<EmployeesClass>=[];
  displayedColumns: string[] = ['id','name','task','date'];

  constructor() { }
  msg:string='';
  ngOnInit(): void {
  }

  addTasks(){
    let addTask = this.addRef.value;
    let empTask1:EmployeesClass={id: addTask.id,name:addTask.name,task:addTask.task,date:addTask.date};
    this.taskEmploy.push(empTask1);
  }

}

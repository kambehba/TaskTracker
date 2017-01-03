
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Task} from '../models/taskModel';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  private tasks:Task[]
  constructor(private ts:TaskService,private router:Router) { 
       this.ts.getTask().subscribe(
          (data:Task[]) => this.tasks = data
      
      );
  }

  ngOnInit() {
  }

   goToAddTask(){this.router.navigate(['addTask']);}

}

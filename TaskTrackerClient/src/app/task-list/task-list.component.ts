
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
          (data:Task[]) => {this.tasks = data},
          
        
      
      );
  }

  ngOnInit() {
  }

   goToAddTask(){this.router.navigate(['addTask']);}

   onEditTask(task:Task)
   {
     //this.ts.taskSelectedEvent.emit(task);
     //this.router.navigate(['editTask']);
     this.ts.setSelectedTask(task);
     this.router.navigate(['editTask']);
   }


   onDeleteTask(task:Task)
   {
     this.ts.deleteTask(task).subscribe(
          result =>{ console.log(result),this.goToTaskList();}
      
      );
   }

   goToTaskList()
   {
       this.ts.getTask().subscribe(
       (data:Task[]) => {this.tasks = data});

   }



}//End of the Class


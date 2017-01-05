import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TaskService} from '../services/task.service';
import {Task} from '../models/taskModel';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  // constructor(private task:Task,private router:Router,private ts:TaskService) { }
   task:Task;
   
   constructor(private router:Router,private ts:TaskService) { this.task = new Task('','','')}

  ngOnInit() {
  }

    goToTaskList()
    {
        this.ts.addTask(this.task).subscribe(
          data=>{console.log(data); this.router.navigate(['']);},
          error => console.log(error)
         
       
        );
        // this.router.navigate(['']);

    
    }
  
}

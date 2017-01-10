import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TaskService} from '../services/task.service';
import {Task} from '../models/taskModel';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task:Task;
  constructor(private router:Router,private ts:TaskService) { 
    this.task = new Task('','','');
  }

  ngOnInit() {
     this.task = this.ts.getSelectedTask();
     
  }

   goToTaskList()
    {
        
        this.ts.editTask(this.task).subscribe(
          data=>{console.log(data); this.router.navigate(['']);},
          error => console.log(error)
          );

    
    }

}//End of EditTaskComponent

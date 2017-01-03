import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Task} from './models/taskModel';
import {TaskService} from './services/task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
  
})
export class AppComponent {
  private tasks:Task[]
  constructor(private ts:TaskService){

      //this.tasks = this.ts.getTask();

      this.ts.getTask().subscribe(
          (data:Task[]) => this.tasks = data
      
      );
  }

 

}

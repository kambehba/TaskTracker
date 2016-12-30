import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Task} from '../models/taskModel';
import 'rxjs/RX';

@Injectable()
export class TaskService {

  private tasks:Task[] = [new Task('dafsd','sdfsdf','sdfsdf'),new Task('daf5555sd','sdfsd5555f','5555')];

  constructor(private http:Http) { }

   getTask()
  {
    //return this.tasks;

    return this.http.get('http://localhost:3000/api/tasks').map((response:Response)=>response.json());
  }

}

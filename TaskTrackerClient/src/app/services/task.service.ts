import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Task} from '../models/taskModel';
import {Observable} from "rxjs";
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


   addTask(task:Task)
   {
     const body = JSON.stringify(task);
     const headers = new Headers({'Content-Type':'application/json', 'Accept': 'application/json'});
     return this.http.post('http://localhost:3000/api/tasks',body,{headers:headers})
     .map((response:Response)=>response.json())
     .catch(this.handleError);
     //.catch((error:Response)=>Observable.throw(this.handleError));
   }


   private handleError(error:any){
     console.log("*******************");
     console.log(error);
     return Observable.throw(error);
   }

}

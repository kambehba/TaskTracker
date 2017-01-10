import { Injectable,EventEmitter } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Task} from '../models/taskModel';
import {Observable} from "rxjs";
import 'rxjs/RX';

@Injectable()
export class TaskService {

  private tasks:Task[] = [new Task('dafsd','sdfsdf','sdfsdf'),new Task('daf5555sd','sdfsd5555f','5555')];
  private task:Task;
  private selectedTask:Task;
  taskSelectedEvent = new EventEmitter<Task>();

  constructor(private http:Http) {this.task = new Task('','','') }

  //  getTask(){
    
  //     return this.http.get('http://localhost:3000/api/tasks').map((response:Response)=>response.json());
  //  }


    getTask() {
        return this.http.get('http://localhost:3000/api/tasks')
            .map((response: Response) => {
                //const tasks = response.json().obj;
                const tasks = response.json();
                let transformedTasks: Task[] = [];
                for (let task of tasks) {
                    transformedTasks.push(new Task(task._id,task.description,task.status));
                }
                this.tasks = transformedTasks;
                return transformedTasks;
                //return tasks;
            })
            //.catch((error: Response) => Observable.throw(error.json()));
             .catch(this.handleError);
    }


   addTask(task:Task){

     const body = JSON.stringify(task);
    
     const headers = new Headers({'Content-Type':'application/json', 'Accept': 'application/json'});
     return this.http.post('http://localhost:3000/api/tasks',body,{headers:headers})
     .map((response:Response)=>response.json())
     .catch(this.handleError);
     //.catch((error:Response)=>Observable.throw(this.handleError));
   }

    editTask(task:Task){

     const body = JSON.stringify(task);
    
     const headers = new Headers({'Content-Type':'application/json', 'Accept': 'application/json'});
     return this.http.post('http://localhost:3000/api/tasks',body,{headers:headers})
     .map((response:Response)=>response.json())
     .catch(this.handleError);
     //.catch((error:Response)=>Observable.throw(this.handleError));
   }

   deleteTask(task:Task)
   {
     //console.log(task.description);
     
     this.task = task;
     
     const body = JSON.stringify(task);
      console.log(body);
     const headers = new Headers({'Content-Type':'application/json', 'Accept': 'application/json'});
     return this.http.delete('http://localhost:3000/api/tasks',new RequestOptions({headers:headers,body:body}))
     .map((response:Response)=>response.json())
     .catch(this.handleError);
     //.catch((error:Response)=>Observable.throw(this.handleError));
   }

    taskSelectedForEdit(task: Task) {
        this.taskSelectedEvent.emit(task);
    }

    setSelectedTask(task:Task){
      this.selectedTask = task;
    }

    getSelectedTask(){
      return  this.selectedTask;
    }







   private handleError(error:any){
     console.log(error);
     return Observable.throw(error);
   }

}//End of the Task Service 

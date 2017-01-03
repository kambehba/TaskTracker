
import{Routes,RouterModule} from "@angular/router";
import{TaskListComponent} from "./task-list/task-list.component";
import{AddTaskComponent} from "./add-task/add-task.component";

const APP_ROUTES : Routes = [
    {path:'addTask',component:AddTaskComponent},
    {path:'',component:TaskListComponent}
];


export const routing = RouterModule.forRoot(APP_ROUTES);
import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task.model';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskList: Task[];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.getTaskData();
  }

  getTaskData() {
    this.taskService.getTaskList().subscribe((data: any) => {
      this.taskList = data;
    });
  }

}

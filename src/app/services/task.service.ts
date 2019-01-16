import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskList() {

    return this.http.get("/assets/tasks.json",
      { headers: { "accept": "application/json" } });
  }
}

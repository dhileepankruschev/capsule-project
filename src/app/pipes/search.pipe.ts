import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(
    tasks: Array<Task>,
    taskname?: string,
    parenttask?: string,
    priorityFrom?: number,
    priorityTo?: number,
    startDate?: string,
    endDate?: string) {

    tasks = tasks.filter(task => task.name.toLowerCase().includes(taskname.toLowerCase()));

    tasks = tasks.filter(task => task.parent.toLowerCase().includes(parenttask.toLowerCase()));

    tasks = tasks.filter(task => {
      if (!priorityFrom)
        priorityFrom = 0;
      console.log(task)
      console.log(priorityFrom)
      if (task.priority >= priorityFrom)
        return true;
    });

    tasks = tasks.filter(task => {
      if (!priorityTo)
        priorityTo = 30;
      console.log(task)
      console.log(priorityTo)

      if (task.priority <= priorityTo)
        return true;
    });

    return tasks;
  }

}

import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  task: any;
  constructor(protected ref: NbDialogRef<EditTaskComponent>,
    public NbDialogService: NbDialogService) { }

  ngOnInit() {
    this.task = this.NbDialogService.test;
  }

  cancel() {
    this.ref.close();
  }

  submit(task, desc) {

    var testArray =
      {
        taskId: this.task._id,
        task: this.task.task,
        desc: this.task.desc,
        status: this.task.status,
        isDeleted: this.task.isDeleted,
        date: this.task.date,
      }


    this.ref.close(testArray);
  }

}

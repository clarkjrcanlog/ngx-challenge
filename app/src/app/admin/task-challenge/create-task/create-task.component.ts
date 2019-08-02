import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms'; //imports formGroup and formControl
import { NbDialogService } from '@nebular/theme';


@Component({
  selector: 'ngx-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(protected ref: NbDialogRef<CreateTaskComponent>,
    public NbDialogService: NbDialogService) { }

  ngOnInit() {
    console.log(this.NbDialogService.test);
    // this.todoForm = this.fb.group({
    //   tasks: this.fb.array([
    //     this.addTaskFormGroup()
    //   ])
    // });
  }

  // addTaskButtonClick(): void{
  //   (<FormArray>this.todoForm.get('tasks')).push(this.addTaskFormGroup());
  // }



  cancel() {
    this.ref.close();
  }

  submit(task, desc) {
    var stat = "On going";

    var testArray =
      {
        task: task,
        desc: desc,
        status: stat,
        isDeleted: false,
        date: new Date
      }

    this.ref.close(testArray);
  }

}

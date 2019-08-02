import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../admin-menu';
import { NbDialogService } from '@nebular/theme';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AuthService } from '../../@core/services/auth.service';
import { TestBed } from '@angular/core/testing';



@Component({
  selector: 'ngx-task-challenge',
  templateUrl: './task-challenge.component.html',
  styleUrls: ['./task-challenge.component.scss'],
})
export class TaskChallengeComponent implements OnInit {
  menu = MENU_ITEMS;

  tasks: any = [];
  testChecker: any = [];
  taskFromDb: any;
  all: any;

  constructor(private dialogService: NbDialogService,
    private authService: AuthService) { }

  ngOnInit() {this.refreshTaskList()
  }

  refreshTaskList() {
    this.authService.getTaskList().subscribe((res) => {
      this.taskFromDb = res;
      this.all = this.taskFromDb.concat(this.tasks);
      // this.all = this.all.forEach(e => e.selected = false)
      this.all = this.all.filter(e => {
        e.selected = false;
        e.selectedStat = false;
        return e.isDeleted === false;

      });

    });
  }

  createModal() {
    this.dialogService.open(CreateTaskComponent)
      // .onClose.subscribe(task => {
      //   this.tasks.push(task);
      //   this.all = this.taskFromDb.concat(this.tasks);
      //   console.log(this.tasks);
      // });
    .onClose.subscribe(task => {
      task && this.tasks.push(task)
      this.all = this.taskFromDb.concat(this.tasks);
      this.all = this.all.filter(e => e.isDeleted === false);
        console.log(this.tasks);
    });

      this.dialogService.test = this.tasks;
  }

  clearList(){
    this.all = this.all.filter(e => this.taskFromDb.includes(e));
    console.log(this.all)
    this.tasks.length = 0;
    console.log(this.tasks);
  }

  saveData(){
    this.tasks.forEach( e => {
      // console.log(e)
      this.authService.saveTask(e).subscribe(data => {
        console.log(data);
        if((data as any).success){
          this.refreshTaskList();
          this.tasks.length = 0;
          console.log('saved')
        }else{
          console.log('failed')
        }
      })
    })
  }

  editModal(task){
    console.log(task)
    this.dialogService.open(EditTaskComponent)
      .onClose.subscribe(task => {
        task && this.test(task) ;

        // (task.taskId == undefined) ? console.log('tempo')
          //  test(){
          //   console.log('fromDb')
          //   let data = {
          //     task: task.task,
          //     desc: task.desc,
          //     status: task.status,
          //     date: task.date,
          //   }


          //   let id = task.taskId;

          //   this.authService.updateTask(id, data).subscribe(e => {
          //     if((e as any).success){
          //       // this.refreshTaskList();
          //       // this.tasks.length = 0;
          //       console.log(e)
          //     }else{
          //       console.log(e)
          //     }
          //   })
          // }

      });

      this.dialogService.test = task;
  }

  test(task){
    if(task.taskId == undefined){
      console.log('tempo')
    }else{
      console.log('fromDb')
      let data = {
        task: task.task,
        desc: task.desc,
        status: task.status,
        isDeleted: task.isDeleted,
        date: task.date,
      }


      let id = task.taskId;

      this.authService.updateTask(id, data).subscribe(e => {
        if((e as any).success){
          // this.refreshTaskList();
          // this.tasks.length = 0;
          console.log(e)
        }else{
          console.log(e)
        }
      })
    }

  }



  deleteTask(task){

    if(confirm("Are you sure to delete "+ task.task)) {
      if(task._id == undefined){
        task.isDeleted = true
        if(task.isDeleted === true){
          this.tasks.shift(task);
          this.refreshTaskList();
          console.log(this.tasks);
          }
      }else{
        console.log('fromBb')
        let data = {
          task: task.task,
          desc: task.desc,
          status: task.status,
          isDeleted: true,
          date: task.date,
        }

        let id = task._id;

        this.authService.updateTask(id, data).subscribe(e => {
          if((e as any).success){
            this.refreshTaskList();
            // this.tasks.length = 0;
            console.log(e)
          }else{
            console.log(e)
          }
        })

      }
    }

  }


  testCheck(task){

    task.selected = !task.selected;
    if(task.selected == true){

      this.testChecker.push({
        taskId: task._id,
        task: task.task,
        desc: task.desc,
        status: task.status,
        isDeleted: task.isDeleted,
        date: task.date,
      });

    }else{
      this.testChecker.pop(task);
    }
    console.log(this.testChecker);

  }

  deleteMulti(){


    if(confirm("Are you sure to delete ")) {
      this.testChecker.forEach(e => {
        // console.log(e.taskId);
      if(e.taskId == undefined){
        console.log('array')
        e.isDeleted = true
        if(e.isDeleted === true){
          // this.tasks.shift(task);
          this.refreshTaskList();
          console.log(this.tasks);
          }
      }else{
        console.log('fromBb')
        let data = {
          task: e.task,
          desc: e.desc,
          status: e.status,
          isDeleted: true,
          date: e.date,
        }

        let id = e.taskId;

        this.authService.updateTask(id, data).subscribe(e => {
          if((e as any).success){
            this.refreshTaskList();
            this.testChecker.length = 0;
            console.log('success')
          }else{
            console.log(e)
          }
        })

      }

    }) //end of forEach

    }//end of confirmation msg



  }//end of deleteMulti


  changeStatus(task){
    task.selectedStat = !task.selectedStat;
    if(task.selectedStat == true){
      if(task._id == undefined){
        console.log('array')
        // task.isDeleted = true
        // if(task.isDeleted === true){
        //   this.tasks.shift(task);
        //   this.refreshTaskList();
        //   console.log(this.tasks);
        //   }
      }else{
        console.log('fromBb')
        let data = {
          task: task.task,
          desc: task.desc,
          status: 'Done',
          isDeleted: false,
          date: task.date,
        }

        let id = task._id;

        this.authService.updateTask(id, data).subscribe(e => {
          if((e as any).success){
            this.refreshTaskList();
            // this.tasks.length = 0;
            console.log('success')
          }else{
            console.log(e)
          }
        })

      }
    }else{
      console.log('unchecked')
        let data = {
          task: task.task,
          desc: task.desc,
          status: 'On going',
          isDeleted: false,
          date: task.date,
        }

        let id = task._id;

        this.authService.updateTask(id, data).subscribe(e => {
          if((e as any).success){
            this.refreshTaskList();
            // this.tasks.length = 0;
            console.log('success')
          }else{
            console.log(e)
          }
        })
    }

  }


}


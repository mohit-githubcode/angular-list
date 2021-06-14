import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todoList !: FormArray;
  todoListForm !: FormGroup;
  addList:any=[]
  userInfomation:any
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private route:Router

  ) { }

  ngOnInit(): void {
    this.userInfomation=JSON.parse(localStorage.getItem("loginUser"))
    console.log(  this.userInfomation)
    this.todoListForm = this.formBuilder.group({
      todoList: this.formBuilder.array([ this.createItem()])

  })

}


createItem(): FormGroup {
  return this.formBuilder.group({
    discription:'', 
  });
}


addItem(): void {
  this.todoList = this.todoListForm.get('todoList') as FormArray;
  this.todoList.push(this.createItem());
}

deleteRow(i:number){
  if(i == 0){

  }
  else{
    this.todoList.removeAt(i)

  }
}

onSubmit() {
    this.addList=this.todoListForm.value.todoList
}

logout(){
  localStorage.removeItem("loginUser");
  this.route.navigate(['/'])
}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  userInfo:any=[]
  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route:Router
    
    ) { }

  ngOnInit() {
    let usersHistroyInfo=localStorage.getItem("userInfo")

    if(usersHistroyInfo != null){
       this.userInfo=JSON.parse(usersHistroyInfo)
    }
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
       let loginCredentials=[]
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      else if(this.userInfo.length > 0){
        // debugger
                for(let i=0;i<this.userInfo.length;i++){
                  if(this.userInfo[i].email === this.loginForm.value.email && this.userInfo[i].password === this.loginForm.value.password){
                    localStorage.setItem("loginUser",JSON.stringify(this.userInfo[i]))
                      this.route.navigate(['/dashboard'])
                      this.toastr.success("Successfully Login !!")
                      break
                  }
                  else if((this.userInfo[i].email === this.loginForm.value.email && this.userInfo[i].password != this.loginForm.value.password) || (this.userInfo[i].email != this.loginForm.value.email && this.userInfo[i].password === this.loginForm.value.password)){
                      this.toastr.error("Invalid email or password")
                      break
                  }
                  else{
                     continue
                  }
            }
      }
      else{
        this.toastr.error("You are not register !!")

      }
 
  }

 

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  userInfo:any=[]
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route:Router
    ) { }

  ngOnInit() {
   let usersHistroyInfo=localStorage.getItem("userInfo")

   if(usersHistroyInfo != null){
      this.userInfo=JSON.parse(usersHistroyInfo)
   }
      this.registerForm = this.formBuilder.group({
          Name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      if(this.registerForm){
            this.userInfo.push(this.registerForm.value)
            localStorage.setItem("userInfo",JSON.stringify(this.userInfo))
            this.toastr.success('Register successfully');
            this.registerForm.setValue({
              Name:'',
              email: '',
              password:''
            })
            setTimeout(()=>{
                this.route.navigate(['/login'])
            },200)

      }
  }


}

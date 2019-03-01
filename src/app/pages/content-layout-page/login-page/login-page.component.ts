import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import {UserService} from '../../../shared/services/users/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userLoginForm : FormGroup;
  error = false;

  constructor(private router: Router,
    private route: ActivatedRoute,private _formBuilder: FormBuilder,private _userServics :UserService) { }

    ngOnInit() {
      this._initForm();
  }
    _initForm = ():void => {
      this.userLoginForm = this._formBuilder.group({
        userInformation : this._formBuilder.group({
          username: new FormControl('', [Validators.required]),
          password : new FormControl('',[Validators.required])    
        }),
      })
    }
    

// On submit button click
// onSubmit(userForm: NgForm) {
  // this.loginService.submitlogin(userForm.controls['userName'].value, userForm.controls['userPassword'].value) .subscribe(result => {
  //   if(result.status==200) {
  //     this.toastr.typeSuccess('Welcome ' + userForm.controls['userName'].value + '. Login successful. Redirecting..... ');
  //     this.router.navigate([result.url], { relativeTo: this.route.parent });
  //   } else {
  //     this.toastr.typeError(result.message);
  //   }
  // });
// }
// On Forgot password link click
onForgotPassword() {
    this.router.navigate(['/forgotpassword'], { relativeTo: this.route.parent });
}
// On registration link click
onRegister (){
    this.router.navigate(['/register'], { relativeTo: this.route.parent });
}

submitLogin = async() => {
 let data = {
  ul_username : this.userLoginForm.value.userInformation.username,
  ul_password : this.userLoginForm.value.userInformation.password

 }
  const result = await this._userServics.login(data);
    if(result['status']==200){
      this.router.navigate(['/dashboard'], { relativeTo: this.route.parent });
    }
    else {
      this.error = true;
      // window.alert("User Name and Password is incorrect");
    }
}


}

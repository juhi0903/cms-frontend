import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {UserService} from '../../../shared/services/users/user.service';




@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPassowrdForm : FormGroup;
  error = false;
  status : any = "000";

  constructor(private router: Router,
    private route: ActivatedRoute,private _formBuilder: FormBuilder,private _userServics :UserService) { }

    ngOnInit() {
      this._initForm();
  }
    _initForm = ():void => {
      this.forgotPassowrdForm = this._formBuilder.group({
        userInformation : this._formBuilder.group({
          username: new FormControl('', [Validators.required]), 
          oldpassword : new FormControl ('', [Validators.required]),
          newpassword : new FormControl('',[Validators.required])
        }),
      })
    }

  onLogin() {
    this.router.navigate(['/login'], { relativeTo: this.route.parent });
}

submitForm = async () => {
  let data = {
    ul_username : this.forgotPassowrdForm.value.userInformation.username,
    ul_password : this.forgotPassowrdForm.value.userInformation.oldpassword,
    ul_newpassword : this.forgotPassowrdForm.value.userInformation.newpassword
   }

   const result = await this._userServics.forgorPassword(data);
    if(result['status']==200){
      this.router.navigate(['/login'], { relativeTo: this.route.parent });
    }
    else if(result['status'] == 403 || result['status'] == 402) {
      this.status = result['status'];
      // window.alert("User Name and Password is incorrect");
    }
    else 
      this.error = true;

    }
}



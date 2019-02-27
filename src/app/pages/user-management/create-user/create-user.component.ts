import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { genders , urls , userrole} from '../../../app.config';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {UserService} from '../../../shared/services/users/user.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userRegisterForm : FormGroup;
  genders : any;
  url : any;
  userData : any;
  orgDomain : any;
  phonePattern = "^[0-9]{10,13}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public domain:string;
  userrole : any =[];

  constructor(
    private _formBuilder: FormBuilder ,
    private router: Router,
    private route: ActivatedRoute,
    private _userServics :UserService)
     {
       this.genders = genders;
       this.userrole = userrole;
        this.url = this.router.url;
       this.route.parent.parent.paramMap.subscribe(params => {
        //  this.domain = params.get('org');
        //  this.orgDomain = "/" + this.domain +"/admin/" +"editprofile";
       });
        // console.log(this.orgDomain);
    }

  ngOnInit() {
    this._initForm();
    this._initPage();
}

  _initForm = ():void => {
  this.userRegisterForm = this._formBuilder.group({
    userInformation : this._formBuilder.group({
      userId : new FormControl('', [Validators.required]),
      emailId : new FormControl('', [Validators.required ,Validators.pattern(this.emailPattern)]),
      gender : new FormControl('', [Validators.required]),
      userrole : new FormControl('',[Validators.required]),
      phoneNumber : new FormControl('',[Validators.pattern(this.phonePattern)]),
      dob : new FormControl(''),

    }),
  })
}

_initPage = async ()  => {
  if(this.url==this.orgDomain){
    // await this.getUsers();
    this._patchForm(this.userData);
  }
}

_patchForm = (value):void => {
  this.userRegisterForm.patchValue({
    userInformation :{
      dob : value['dob'],
      phoneNumber : value['mobile'],
      userId : value['userName'],
      emailId : value['emailId'],
      gender : value['gender'],
      userrole : value['userrole']
    },
  });

  }

createNewUser = async () => {
  let user : any = {
    dob : this.userRegisterForm.value.userInformation.dob,
    phone : this.userRegisterForm.value.userInformation.phoneNumber,
    email : this.userRegisterForm.value.userInformation.emailId,
    username : this.userRegisterForm.value.userInformation.userId,
    gender : this.userRegisterForm.value.userInformation.gender,
    userrole : this.userRegisterForm.value.userInformation.userrole
  }
  const data =  await this._userServics.saveUser(user);
  this.router.navigate([ '/user/' + urls.viewUser], { relativeTo: this.route.parent });
}

resetUserForm(){
  this._initForm();
}


}

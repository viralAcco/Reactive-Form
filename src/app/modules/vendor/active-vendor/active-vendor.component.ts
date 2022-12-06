import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormControlName, Validators, FormBuilder} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // infoForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   bio: new FormControl(''),
  //   domain: new FormControl('')
  // })

  infoForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    bio: ['', Validators.required],
    domain: ['', Validators.required]
  })

  get name(){
    return this.infoForm.get('name')
  }
  get email(){
    return this.infoForm.get('email')
  }
  get bio(){
    return this.infoForm.get('bio')
  }
  get domain(){
    return this.infoForm.get('domain')
  }
  temp:any;
  data:any = [];
  visible:boolean = false;
  submitUser(){
    // this.data = this.infoForm.value;
    // this.data = this.data.slice().reverse();
    this.temp = this.infoForm.value;
    // for(let i = 0; i < 4; i++){
    //   this.data[i] = this.temp[3-i]l 
    // }
    this.data.push(this.temp.name);
    this.data.push(this.temp.email);
    this.data.push(this.temp.bio);
    this.data.push(this.temp.domain);
    this.visible = true;
    console.log(this.data);
    this.infoForm.reset();
  }
}

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
    email: ['', Validators.required],
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

  data:any;
  submitUser(){
    this.data = this.infoForm.value;
    this.infoForm.reset();  
  }


}

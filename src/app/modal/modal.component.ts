import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { UserService } from '../service';
import {Location} from '@angular/common';
import { IpServiceService } from '../ip-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  focus:any;
  focus1:any;
  focus2:any;
  ipAddress:any;
  IpAddress:any=this.getIp();
  @Input() user:User={name:'',email:'',phone:'',url:' Sumadhura Olympus'};
  constructor(private http:HttpClient,private userService: UserService,public activeModal: NgbActiveModal,public location:Location,private ipAdd:IpServiceService) { }
 
  
  ngOnInit(): void {
    this.getIp();
    let input_group_focus = document.getElementsByClassName('form-control');
    let input_group = document.getElementsByClassName('input-group');
    for (let i = 0; i < input_group.length; i++) {
        input_group[i].children[0].addEventListener('focus', function (){
            input_group[i].classList.add('input-group-focus');
        });
        input_group[i].children[0].addEventListener('blur', function (){
            input_group[i].classList.remove('input-group-focus');
        });
    }
  
   
  }
  
  getIp():void{
    this.http.get('https://keyonprop.com/api/getIp').subscribe((res:any)=>{
      return this.ipAddress = res.message;  
    });
  }
  OnSave():void{
    this.userService.formSubmit(this.user).subscribe(()=>this.goBack());
  }
  goBack():void{
    window.location.href='/thankyou';
  }

}

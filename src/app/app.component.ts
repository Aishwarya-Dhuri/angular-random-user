import { Component,OnInit } from '@angular/core';
import {UserService} from './services/user.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dataweb-display';
  user:any; 

  constructor(private userService:UserService,private toastr: ToastrService){}


  ngOnInit(){
    
    
    this.userService.getUser().subscribe(
      //to handle if user is coming from service
      (user:any) => {
        // console.log(user);
        this.user = user.results[0];
      } ,
      //to handle if service throws an error
      (err)=>{
        this.toastr.error(err.status,"OOps");
      }

    );

    

  }
  

}

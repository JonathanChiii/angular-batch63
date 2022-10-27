import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id:any;
  userDetail:User = new User();
  
  constructor(private router:ActivatedRoute, private userService:UserService){
      this.id = this.router.snapshot.paramMap.get("id");
      this.userService.getUserById(this.id).subscribe(result=> {
        this.userDetail = result;
        console.log(result);
      })
  }

  ngOnInit(): void {
  }

}

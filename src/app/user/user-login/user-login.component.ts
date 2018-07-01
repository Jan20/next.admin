import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { UserService } from '../user-service/user.service';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../user-model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {


  ///////////////
  // Variables //
  ///////////////
  public user: User = new User('', '', '', '')

  //////////////////
  // Constructors //
  //////////////////
  constructor(
    public userService: UserService,
  ) {}

  async ngOnInit(): Promise<void> {    
    await this.userService.getUser().then(user => this.user = user)
  }

}

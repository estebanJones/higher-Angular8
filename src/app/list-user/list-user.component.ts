import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      // je m'abonne au tableau dans le userService
      (users: User[]) => {
        this.users = users;
      }
    )
    this.userService.emitUsers();
  }

  // Je me désabonne de la souscription
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}

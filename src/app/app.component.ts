import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from './shared/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  //
  private subscription?: Subscription;

  //
  title = 'json-placeholder';

  //
  constructor(private users: UsersService) {}

  //
  ngOnInit(): void {
    this.subscription = this.users.getUsers().subscribe();
  }

  //
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

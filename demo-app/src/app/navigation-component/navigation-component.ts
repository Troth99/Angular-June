import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SearchComponent } from '../search-component/search-component';
import { NavigationDropdownComponent } from './navigation-dropdown-component/navigation-dropdown-component';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-component',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent, NavigationDropdownComponent],
  templateUrl: './navigation-component.html',
  styleUrl: './navigation-component.css',
})
export class NavigationComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private subscription!: Subscription
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscription = this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

 ngOnDestroy(): void {
   this.subscription.unsubscribe()
 }
  login() {
    this.isLoggedIn = true;
  }

  
}

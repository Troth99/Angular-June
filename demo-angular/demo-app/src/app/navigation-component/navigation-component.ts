import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SearchComponent } from "../search-component/search-component";

@Component({
  selector: 'app-navigation-component',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent],
  templateUrl: './navigation-component.html',
  styleUrl: './navigation-component.css'
})
export class NavigationComponent implements OnInit {

  isLoggedIn = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status
    })
  }
  login() {
    this.isLoggedIn = true;
  }

  logout(){
    this.authService.logout()
  }


}

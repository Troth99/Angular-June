import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-dropdown-component',
  imports: [RouterModule],
  templateUrl: './navigation-dropdown-component.html',
  styleUrl: './navigation-dropdown-component.css'
})
export class NavigationDropdownComponent {
dropDownOpen = false;

constructor(private authService: AuthService){}

toggleDropDown(){
  this.dropDownOpen = !this.dropDownOpen
}

closeDropDown(){
  this.dropDownOpen = false;
}

logout(event:Event){
  event.preventDefault()
  this.authService.logout()
  console.log('logged out')
}
}

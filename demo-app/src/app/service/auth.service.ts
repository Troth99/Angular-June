import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({providedIn: 'root'})
export class AuthService {

    private loggedIn = new BehaviorSubject<boolean>(false);

    isLoggedIn$ = this.loggedIn.asObservable()
    constructor(){
        const token = localStorage.getItem('token')
        this.loggedIn.next(!!token)
    }
   setToken(token: string){
      localStorage.setItem('email', token)
      this.loggedIn.next(true)
   }

    logout(){
        localStorage.removeItem('email')
        this.loggedIn.next(false)
    }
}


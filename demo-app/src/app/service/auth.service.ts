import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";




@Injectable({providedIn: 'root'})
export class AuthService {

    private loggedIn = new BehaviorSubject<boolean>(false);

    isLoggedIn$ = this.loggedIn.asObservable()

    login(username: string, password: string): boolean {
        if(username === 'admin' && password === '1234567'){
            this.loggedIn.next(true)
            return true
        }

        this.loggedIn.next(false);
        return false
    }

    logout(){
        this.loggedIn.next(false)
    }
}

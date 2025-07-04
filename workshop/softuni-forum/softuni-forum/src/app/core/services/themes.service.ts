import { Injectable } from "@angular/core";
import { baseUrl, themesUrl } from "../../constants/api-constants/api-constants";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ThemeInterface } from "../../models";


@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private apiThemesUrl = baseUrl + themesUrl

    constructor(private http: HttpClient){

    }

    getThemes(): Observable<ThemeInterface[]> {
        return this.http.get<ThemeInterface[]>(this.apiThemesUrl)
    }
}
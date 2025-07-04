import { Injectable } from "@angular/core";
import { baseUrl, postsFiveUrl } from "../../constants/api-constants/api-constants";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PostsInterface } from "../../models";


@Injectable({
    providedIn: "root"
})

export class PostServices {

    private apiPostsUrl = baseUrl + postsFiveUrl;

    constructor(private http: HttpClient){

    }
    getRecentPosts(limit: number = 5): Observable<PostsInterface[]> {
        return this.http.get<PostsInterface[]>(this.apiPostsUrl.replace('{0}', limit.toString()))
    }
}
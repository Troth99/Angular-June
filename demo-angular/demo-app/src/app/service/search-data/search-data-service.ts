import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class SearchDataService {
    private data = [
        'Programming Basics',
        'Angular Tutorial',
        'JavaScript Guide',
        'CSS Tricks',
        'JavaScript Advanced',
        "C++ Basic",
        'JavaScript Applications'
    ]

    getData(){
        return this.data
    }
}
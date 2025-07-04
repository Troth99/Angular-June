import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostItem } from "../post-item/post-item";
import { PostsInterface } from '../../../models';
import { Subscription } from 'rxjs';
import { PostServices } from '../../../core/services/post.services';

@Component({
  selector: 'app-post-board',
  imports: [PostItem],
  templateUrl: './post-board.html',
  styleUrl: './post-board.css'
})
export class PostBoard implements OnInit, OnDestroy{
  posts: PostsInterface[] = [];
  private subscription?: Subscription


  constructor( private postService: PostServices){

  }
  ngOnInit(): void {
    this.subscription = this.postService.getRecentPosts().subscribe({
      next: (data) => {
          this.posts = data
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  

}

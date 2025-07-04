import { Component, Input } from '@angular/core';
import { PostsInterface } from '../../../models';

@Component({
  selector: 'app-post-item',
  imports: [],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css'
})
export class PostItem {
@Input() singlePost!: PostsInterface
}

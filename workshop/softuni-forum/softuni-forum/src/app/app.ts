import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header-component/header-component';
import { FooterComponent } from "./layout/footer/footer-component/footer-component";
import { ThemeBoard } from "./features/themes/theme-board/theme-board";
import { PostBoard } from "./features/posts/post-board/post-board";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ThemeBoard, PostBoard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'softuni-forum';
}

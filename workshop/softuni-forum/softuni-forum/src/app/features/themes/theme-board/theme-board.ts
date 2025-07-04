import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeItems } from '../theme-items/theme-items';
import { ThemeInterface } from '../../../models';
import { ThemeService } from '../../../core/services/themes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-board',
  imports: [ThemeItems],
  templateUrl: './theme-board.html',
  styleUrl: './theme-board.css'
})
export class ThemeBoard implements OnInit, OnDestroy {
  themes: ThemeInterface[] = []
  private subscription?: Subscription

  constructor( private themeService: ThemeService){

  }

  ngOnInit(): void {
    this.subscription = this.themeService.getThemes().subscribe({
      next: (data) => {
        this.themes = data}
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}

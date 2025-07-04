import { Component, Input } from '@angular/core';
import { ThemeInterface } from '../../../models';

@Component({
  selector: 'app-theme-items',
  imports: [],
  templateUrl: './theme-items.html',
  styleUrl: './theme-items.css'
})
export class ThemeItems {
@Input() theme!: ThemeInterface


}

import { Component, inject } from '@angular/core';
import { data } from '../data/seed';

import { Input } from '@angular/core';
import { Article } from '../data/article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [CommonModule],

  templateUrl: './article.html',
  styleUrl: './article.css'
})


export class ArticleComponent {
  private symbols = 250;

  @Input() article!: Article;
  @Input() articleDesc!: string;

  descToShow = '';
  articleDescLen = 0;
  showReadMoreBtn = true;
  showHideBtn = false;
  imageIsShown = false;
  imageButtonTitle = 'Show image';

  readMore(): void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
      this.descToShow = this.articleDesc;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageIsShown ? 'Hide image' : 'Show image';
  }

  hideDesc(): void {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
  }
}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  navigation: any[] = [
    { id: 1, text: 'First', icon: 'message', path: 'components/first' },
    { id: 2, text: 'Second', icon: 'check', path: 'components/second' },
    { id: 3, text: 'Third', icon: 'trash', path: 'components/third' },
  ];

  onItemClick(e: any) {
    let linkText = e.itemData.text;
    if (linkText === 'Third') {
      window.location = e.itemData.path;
    }
  }
}

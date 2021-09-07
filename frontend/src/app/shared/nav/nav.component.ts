import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  readonly routeNames = [
    "home",
    "lobbies",
    "highscores"
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

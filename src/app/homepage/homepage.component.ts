import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let heart = document.querySelectorAll('.fa-heart');

    Array.from(heart).map((element) =>
      element.addEventListener('click', () => {
        element.classList.toggle('fa-solid');
      })
    );
  }
}

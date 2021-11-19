import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {

    let home = document.querySelector('.home-btn-footer');
    let page = document.querySelector('app-landing-page');

    home?.addEventListener('click', (event) => {
      page?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

}

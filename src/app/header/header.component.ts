import { Component, OnInit } from '@angular/core';


@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

ngOnInit() {}

// @HostListener('window:scroll', [])
// onWindowScroll() {

// 	const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
// 	if (number > 100) {
// 		return true;

// 	} else if (number > 500) {
// 		return false;

  // 	}

// }

}

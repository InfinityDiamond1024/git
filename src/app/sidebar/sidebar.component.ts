import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  
  openNav(): void {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
      sidenav.classList.add('open-nav');
    }
    const main = document.getElementById('main');
    if (main) {
      main.style.marginLeft = '250px';
    }
  }

  closeNav(): void {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
      sidenav.classList.remove('open-nav');
    }
    const main = document.getElementById('main');
    if (main) {
      main.style.marginLeft = '0';
    }
  }

}
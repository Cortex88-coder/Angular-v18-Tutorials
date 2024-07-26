import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgClass, NgFor, TitleCasePipe } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NgClass,
    NgFor,
    TitleCasePipe,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  classes: string = 'app';
}

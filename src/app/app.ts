import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Menu} from './components/menu/menu';
import {Titulo} from './components/titulo/titulo';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Menu, Titulo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blogOffTopic');
}

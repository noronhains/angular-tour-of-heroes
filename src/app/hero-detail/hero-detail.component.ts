import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroe-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}

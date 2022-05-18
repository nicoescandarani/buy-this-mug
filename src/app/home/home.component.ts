import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  height$: BehaviorSubject<number> = new BehaviorSubject(0);

  renderCanvas = false;

  get height(): number {
    return this.height$.value;
  }

  set height(value: number) {
    this.height$.next(value);
  }

  colors: string[] = [
    '#9665ff',
    '#4ef9a9',
    '#f94e70',
    '#fff64d',
    '#ff854d',
    '#ff4de7',
    '#3d64ff',
    '#cfd8ff'
  ];
  selectedColor = this.colors[0];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const documentWidth = window.innerWidth;
    if (documentWidth < 680) {
      const documentHeight = window.innerHeight;
      const colors = document.getElementById('colors');
      const colorsHeight = colors?.clientHeight;
      // ! Set the result height to be the difference between the colors element and the documents height.
      // ! Then substract the padding.
      const resHeight = (colorsHeight ? documentHeight - colorsHeight : 0) - 40;
      // ! Set the result.
      this.height$.next(resHeight);
    }
    this.renderCanvas = true;
    this.cd.detectChanges();
  }
}

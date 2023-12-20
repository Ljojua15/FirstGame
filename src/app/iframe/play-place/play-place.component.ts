import { Component, Input, SimpleChanges } from '@angular/core';
import { hands } from 'src/shared/models/hand';

@Component({
  selector: 'app-play-place',
  templateUrl: './play-place.component.html',
  styleUrls: ['./play-place.component.scss', '../animations.scss'],
})
export class PlayPlaceComponent {
  @Input() name!: string;
  cut: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    this.name = `./assets/images/changa/${this.name}.webp`;
    console.log(this.name + 'sdasd');
  }

  onClick(cut: boolean): void {
    console.log('asdfsdgsdg');
  }
}

// hand: hands[] = [
//   {
//     id: 1,
//     img: '../../../assets/images/changa/1.png',
//   },
//   {
//     id: 2,
//     img: '../../../assets/images/changa/2.png',
//   },
//   {
//     id: 3,
//     img: '../../../assets/images/changa/3.png',
//   },
// ];

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

  changeImg(hand: hands): void {
    // this.hand.forEach((item) => {
    //   if (item.id === 1) {
    //     console.log('sd');
    //   } else if (item.id === 2) {
    //     console.log('aaaa');
    //   } else if (item.id === 3) {
    //     console.log('item');
    //   }
    // });

    switch (hand.id) {
      case 1:
        console.log('sd');
        console.log(hand.img);
        break;
      case 2:
        console.log('aaaa');
        break;
      case 3:
        console.log('item');
        break;
      default:
        // Handle the default case if none of the above cases match
        break;
    }
  }

  hand: hands[] = [
    {
      id: 1,
      img: '../../../assets/images/changa/1.png',
    },
    {
      id: 2,
      img: '../../../assets/images/changa/2.png',
    },
    {
      id: 3,
      img: '../../../assets/images/changa/3.png',
    },
  ];
}

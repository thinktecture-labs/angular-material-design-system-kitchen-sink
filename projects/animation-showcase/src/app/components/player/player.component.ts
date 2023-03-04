import {AfterViewInit, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {animate, AnimationBuilder, AnimationMetadata, AnimationPlayer, style} from '@angular/animations';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements AfterViewInit {
  @ViewChild('square', {read: ElementRef}) square?: ElementRef;
  @ViewChild('slider') slider?: FormControl;
  private readonly animationBuilder = inject(AnimationBuilder);
  private player?: AnimationPlayer;


  ngAfterViewInit(): void {
    const factory = this.animationBuilder.build(this.buildAnimation());
    if (this.square) {
      this.player = factory.create(this.square.nativeElement);
    }

    if (this.slider) {
      this.slider.valueChanges.subscribe((value) => {
        if (value) {
          this.player?.setPosition(value);
        }
      })
    }
  }

  private buildAnimation(): AnimationMetadata[] {
    return [style({transform: 'translateY(0)'}), animate('3s', style({transform: 'translateY(400%) rotate(360deg)'}))]
  }
}

import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {WindowService} from "../../../../shared/window.service";

@Component({
  selector: 'labs-typography-card',
  templateUrl: './typography-card.component.html',
  styleUrls: ['./typography-card.component.scss']
})
export class TypographyCardComponent implements OnChanges, AfterViewInit {
  @Input() key: string = '';
  category = '';
  size = '';
  sizeShortcut = '';
  fontFamily = '';
  fontSize = '';
  letterSpacing = '';
  lineHeight = '';
  weight = '';
  @ViewChild('sample', {read: ElementRef, static: true}) sample!: ElementRef;

  constructor(private readonly elementRef: ElementRef, private readonly windowService: WindowService,) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const [category, size] = this.key.split('-');
    this.category = category;
    this.size = size;
    const [sizeShortcut] = size;
    this.sizeShortcut = sizeShortcut;
  }

  ngAfterViewInit(): void {
    this.computeAndAssignStyle();
  }

  private computeAndAssignStyle() {
    const {nativeElement} = this.sample;
    const {nativeWindow} = this.windowService;
    const style = nativeWindow.getComputedStyle(nativeElement);
    const [fontFamily] = style.fontFamily.split(',');
    this.letterSpacing = style.letterSpacing.replace('normal', '0');
    this.fontFamily = fontFamily;
    this.lineHeight = style.lineHeight;
    this.fontSize = style.fontSize;
    this.weight = style.fontWeight;
  }
}

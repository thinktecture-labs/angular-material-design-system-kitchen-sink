import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyCardComponent } from './typography-card.component';

describe('TypographyCardComponent', () => {
  let component: TypographyCardComponent;
  let fixture: ComponentFixture<TypographyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypographyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

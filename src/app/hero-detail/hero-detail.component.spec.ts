import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeDetailComponent } from './hero-detail.component';

describe('HeroeDetailComponent', () => {
  let component: HeroeDetailComponent;
  let fixture: ComponentFixture<HeroeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

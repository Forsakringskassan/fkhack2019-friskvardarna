import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BokareComponent } from './bokare.component';

describe('BokareComponent', () => {
  let component: BokareComponent;
  let fixture: ComponentFixture<BokareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BokareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BokareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

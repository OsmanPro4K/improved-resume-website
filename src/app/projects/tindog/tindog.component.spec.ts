import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TindogComponent } from './tindog.component';

describe('TindogComponent', () => {
  let component: TindogComponent;
  let fixture: ComponentFixture<TindogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TindogComponent]
    });
    fixture = TestBed.createComponent(TindogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

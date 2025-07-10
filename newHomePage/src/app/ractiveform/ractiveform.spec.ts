import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ractiveform } from './ractiveform';

describe('Ractiveform', () => {
  let component: Ractiveform;
  let fixture: ComponentFixture<Ractiveform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ractiveform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ractiveform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

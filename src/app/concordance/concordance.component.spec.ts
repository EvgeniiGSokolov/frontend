import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcordanceComponent } from './concordance.component';

describe('ConcordanceComponent', () => {
  let component: ConcordanceComponent;
  let fixture: ComponentFixture<ConcordanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcordanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcordanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

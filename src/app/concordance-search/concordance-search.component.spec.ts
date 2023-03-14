import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcordanceSearchComponent } from './concordance-search.component';

describe('ConcordanceSearchComponent', () => {
  let component: ConcordanceSearchComponent;
  let fixture: ComponentFixture<ConcordanceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcordanceSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcordanceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

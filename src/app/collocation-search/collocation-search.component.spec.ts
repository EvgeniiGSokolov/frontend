import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollocationSearchComponent } from './collocation-search.component';

describe('CollocationSearchComponent', () => {
  let component: CollocationSearchComponent;
  let fixture: ComponentFixture<CollocationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollocationSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollocationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

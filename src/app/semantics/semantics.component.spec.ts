import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticsComponent } from './semantics.component';

describe('SemanticsComponent', () => {
  let component: SemanticsComponent;
  let fixture: ComponentFixture<SemanticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

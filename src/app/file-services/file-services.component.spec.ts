import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileServicesComponent } from './file-services.component';

describe('FileServicesComponent', () => {
  let component: FileServicesComponent;
  let fixture: ComponentFixture<FileServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

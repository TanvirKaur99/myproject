import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgelseifComponent } from './ngelseif.component';

describe('NgelseifComponent', () => {
  let component: NgelseifComponent;
  let fixture: ComponentFixture<NgelseifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgelseifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgelseifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

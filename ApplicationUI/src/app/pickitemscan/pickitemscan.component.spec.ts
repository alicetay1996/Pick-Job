import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickitemscanComponent } from './pickitemscan.component';

describe('PickitemscanComponent', () => {
  let component: PickitemscanComponent;
  let fixture: ComponentFixture<PickitemscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickitemscanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickitemscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

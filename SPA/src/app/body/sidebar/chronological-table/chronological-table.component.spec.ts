import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronologicalTableComponent } from './chronological-table.component';

describe('ChronologicalTableComponent', () => {
  let component: ChronologicalTableComponent;
  let fixture: ComponentFixture<ChronologicalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronologicalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronologicalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

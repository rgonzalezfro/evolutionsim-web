import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationDetailValueComponent } from './simulation-detail-value.component';

describe('SimulationDetailValueComponent', () => {
  let component: SimulationDetailValueComponent;
  let fixture: ComponentFixture<SimulationDetailValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationDetailValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationDetailValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

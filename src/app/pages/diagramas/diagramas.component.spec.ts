import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramasComponent } from './diagramas.component';

describe('DiagramasComponent', () => {
  let component: DiagramasComponent;
  let fixture: ComponentFixture<DiagramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

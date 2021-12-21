import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduccionComponent } from './produccion.component';

describe('ProduccionComponent', () => {
  let component: ProduccionComponent;
  let fixture: ComponentFixture<ProduccionComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

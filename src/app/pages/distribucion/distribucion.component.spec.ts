import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DistribucionComponent } from './distribucion.component';

describe('DistribucionComponent', () => {
  let component: DistribucionComponent;
  let fixture: ComponentFixture<DistribucionComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { FormsModule } from '@angular/forms';
import { TareasPlusComponent } from './tareas-plus.component';

describe('TareasPlusComponent', () => {
  let component: TareasPlusComponent;
  let fixture: ComponentFixture<TareasPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasPlusComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

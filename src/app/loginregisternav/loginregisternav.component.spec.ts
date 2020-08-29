import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginregisternavComponent } from './loginregisternav.component';

describe('LoginregisternavComponent', () => {
  let component: LoginregisternavComponent;
  let fixture: ComponentFixture<LoginregisternavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginregisternavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginregisternavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

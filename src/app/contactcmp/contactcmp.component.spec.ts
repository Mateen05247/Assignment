import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactcmpComponent } from './contactcmp.component';

describe('ContactcmpComponent', () => {
  let component: ContactcmpComponent;
  let fixture: ComponentFixture<ContactcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactcmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

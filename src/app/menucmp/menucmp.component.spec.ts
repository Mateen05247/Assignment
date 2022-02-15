import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucmpComponent } from './menucmp.component';

describe('MenucmpComponent', () => {
  let component: MenucmpComponent;
  let fixture: ComponentFixture<MenucmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenucmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

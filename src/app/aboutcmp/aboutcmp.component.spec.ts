import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcmpComponent } from './aboutcmp.component';

describe('AboutcmpComponent', () => {
  let component: AboutcmpComponent;
  let fixture: ComponentFixture<AboutcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutcmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

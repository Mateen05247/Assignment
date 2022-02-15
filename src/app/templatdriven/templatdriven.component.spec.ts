import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatdrivenComponent } from './templatdriven.component';

describe('TemplatdrivenComponent', () => {
  let component: TemplatdrivenComponent;
  let fixture: ComponentFixture<TemplatdrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatdrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatdrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

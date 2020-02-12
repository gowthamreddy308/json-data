import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsondatatableComponent } from './jsondatatable.component';

describe('JsondatatableComponent', () => {
  let component: JsondatatableComponent;
  let fixture: ComponentFixture<JsondatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsondatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsondatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

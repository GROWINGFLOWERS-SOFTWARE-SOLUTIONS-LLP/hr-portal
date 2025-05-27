import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHrComponent } from './my-hr.component';

describe('MyHrComponent', () => {
  let component: MyHrComponent;
  let fixture: ComponentFixture<MyHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

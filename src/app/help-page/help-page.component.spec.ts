import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from 'primeng/dragdrop';
import { HelpPageComponent } from './help-page.component';

describe('HelpPageComponent', () => {
  let component: HelpPageComponent;
  let fixture: ComponentFixture<HelpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HelpPageComponent,
        NgModule,
        CommonModule,
        FormsModule,
        DragDropModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

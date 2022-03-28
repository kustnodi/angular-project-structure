import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlottrakUiComponent } from './slottrak-ui.component';

describe('SlottrakUiComponent', () => {
  let component: SlottrakUiComponent;
  let fixture: ComponentFixture<SlottrakUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlottrakUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlottrakUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcPorIdadeComponent } from './imc-por-idade.component';

describe('ImcPorIdadeComponent', () => {
  let component: ImcPorIdadeComponent;
  let fixture: ComponentFixture<ImcPorIdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImcPorIdadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImcPorIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

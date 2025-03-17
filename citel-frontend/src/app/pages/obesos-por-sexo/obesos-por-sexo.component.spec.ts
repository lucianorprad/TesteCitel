import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesosPorSexoComponent } from './obesos-por-sexo.component';

describe('ObesosPorSexoComponent', () => {
  let component: ObesosPorSexoComponent;
  let fixture: ComponentFixture<ObesosPorSexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObesosPorSexoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObesosPorSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

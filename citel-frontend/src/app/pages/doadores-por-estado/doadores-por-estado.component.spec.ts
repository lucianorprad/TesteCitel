import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadoresPorEstadoComponent } from './doadores-por-estado.component';

describe('DoadoresPorEstadoComponent', () => {
  let component: DoadoresPorEstadoComponent;
  let fixture: ComponentFixture<DoadoresPorEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoadoresPorEstadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoadoresPorEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

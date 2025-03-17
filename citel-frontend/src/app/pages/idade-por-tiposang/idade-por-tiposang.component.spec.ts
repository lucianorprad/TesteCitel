import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdadePorTiposangComponent } from './idade-por-tiposang.component';

describe('IdadePorTiposangComponent', () => {
  let component: IdadePorTiposangComponent;
  let fixture: ComponentFixture<IdadePorTiposangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdadePorTiposangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdadePorTiposangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

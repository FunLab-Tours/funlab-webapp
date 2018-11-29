import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCaMarcheComponent } from './comment-ca-marche.component';

describe('CommentCaMarcheComponent', () => {
  let component: CommentCaMarcheComponent;
  let fixture: ComponentFixture<CommentCaMarcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentCaMarcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCaMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

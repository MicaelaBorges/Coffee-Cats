import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post002Component } from './post002.component';

describe('Post002Component', () => {
  let component: Post002Component;
  let fixture: ComponentFixture<Post002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

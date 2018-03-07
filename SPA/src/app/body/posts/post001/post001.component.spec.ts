import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post001Component } from './post001.component';

describe('Post001Component', () => {
  let component: Post001Component;
  let fixture: ComponentFixture<Post001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

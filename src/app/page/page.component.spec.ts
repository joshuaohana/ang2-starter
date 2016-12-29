import { TestBed } from '@angular/core/testing';
import { PageComponent } from './page.component';
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [PageComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(PageComponent);
    expect(fixture.componentInstance instanceof PageComponent).toBe(true, 'should create PageComponent');
  });
});

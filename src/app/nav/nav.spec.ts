import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NavComponent} from './nav.component';
import {By} from '@angular/platform-browser';
import {RouterLinkDirectiveStub} from '../testing/router-link-stub.directive';


describe('nav component', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent, RouterLinkDirectiveStub]
    });
  });
  fixture = TestBed.createComponent(NavComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();

  it('Should have the correct route for the new note', () => {
    expect(fixture.nativeElement.querySelector(By.css('#newNoteButton')).textContent).toContain('new note');
  });
});

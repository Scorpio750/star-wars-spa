import { TestBed, async } from '@angular/core/testing';
import { CharacterComponent } from './character.component';
describe('CharacterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharacterComponent
      ],
    }).compileComponents();
  }));
  it('should create the character', async(() => {
    const fixture = TestBed.createComponent(CharacterComponent);
    const character = fixture.debugElement.componentInstance;
    expect(character).toBeTruthy();
  }));
  it(`should have as title 'character'`, async(() => {
    const fixture = TestBed.createComponent(CharacterComponent);
    const character = fixture.debugElement.componentInstance;
    expect(character.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CharacterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to character!');
  }));
});

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
});

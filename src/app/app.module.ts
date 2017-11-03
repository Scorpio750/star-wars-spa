import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CharacterComponent]
})
export class AppModule { }

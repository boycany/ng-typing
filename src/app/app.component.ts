import { getLocaleCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  inputText = '';

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    // console.log(target.value);
    this.inputText = target.value;
  }

  compare(randomLetter: string, inputTextLetter: string) {
    if (!inputTextLetter) {
      return 'pending';
    }
    return randomLetter === inputTextLetter ? 'correct' : 'incorrect';
  }
}

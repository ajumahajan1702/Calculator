import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputValue: string = '';

  append(value: string) {
    this.inputValue += value;
  }

  clear() {
    this.inputValue = '';
  }

  delete() {
    this.inputValue = this.inputValue.slice(0, -1);
  }

  calculate() {
    try {
      this.inputValue = eval(this.inputValue);
    } catch (e) {
      this.inputValue = 'Infinity';
    }
  }
}

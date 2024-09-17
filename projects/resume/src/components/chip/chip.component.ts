import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { DEFAULT_COLOR, languageColors } from '../../settings/languageColors';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./chip.component.html",
})
export class ChipComponent {
  language = input<keyof typeof languageColors | null>(null);
  version = input<string>();
  color = input<string>("white");
  isSmall = input<boolean>(false);
  backgroundColor = computed<string>(() => {
    var language = this.language();
    if (language == null) {
      return DEFAULT_COLOR;
    }
    var color = languageColors[this.language()!];
    if (color) {
      return color;
    }
    return DEFAULT_COLOR;
  })
  style = computed<string>(() => {
    return `color: ${this.color()}; background-color: ${this.backgroundColor()}`;
  })
}

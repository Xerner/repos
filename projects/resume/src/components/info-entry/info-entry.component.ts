import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DateTime } from 'luxon';
import { Commute } from '../../models/CommuteType';

@Component({
  selector: 'app-info-entry',
  templateUrl: 'info-entry.component.html',
  standalone: true,
  imports: [
    MatIconModule,
  ],
})
export class InfoEntryComponent {
  title = input.required<string>();
  location = input.required<string>();
  company = input.required<string>();
  commute = input.required<Commute>();
  startDate = input.required<DateTime>();
  endDate = input<DateTime | null>(null);
  image = input<string>("");
  dateFormat = "MMMM yyyy";
}

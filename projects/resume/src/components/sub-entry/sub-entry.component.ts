import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DateTime } from 'luxon';
import { Commute } from '../../models/CommuteType';

@Component({
  selector: 'app-sub-entry',
  templateUrl: 'sub-entry.component.html',
  standalone: true,
  host: { class: "mb-3" },
  imports: [
    MatIconModule,
  ],
})
export class SubEntryComponent {
  title = input.required<string>();
  startDate = input.required<DateTime>();
  endDate = input<DateTime | null>(null);
  dateFormat = "MMMM yyyy";
}

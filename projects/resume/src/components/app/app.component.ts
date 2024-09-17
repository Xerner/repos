import { Component } from "@angular/core";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { DateTime } from "luxon";
import { HeaderComponent } from "../header/header.component";
import { InfoBlockComponent } from "../info-block/info-block.component";
import { InfoEntryComponent } from "../info-entry/info-entry.component";
import { LetterPageComponent } from "../page/letter-page.component";
import { SkillComponent } from "../skill/skill.component";
import { ChipComponent } from "../chip/chip.component";
import { CommonModule } from "@angular/common";
import { SubEntryComponent } from "../sub-entry/sub-entry.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LetterPageComponent,
    HeaderComponent,
    InfoBlockComponent,
    InfoEntryComponent,
    SubEntryComponent,
    MatIconModule,
    SkillComponent,
    ChipComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular';
  DateTime = DateTime;
  readonly PAGE_ASPECT_RATIO = 8 / 11.5;

  constructor(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
  ) {
    matIconRegistry.addSvgIcon(
      'linkedin',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/linkedin.svg')
    );
    matIconRegistry.addSvgIcon(
      'github',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/github.svg')
    );
  }

  ngOnInit(): void {
    // window.addEventListener('resize', this.onResize.bind(this));
    // this.onResize();
  }

  onResize() {
    var pages = document.getElementsByClassName('letter-page');
    var aspectRatio = this.PAGE_ASPECT_RATIO;
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i] as HTMLElement;
      var pageWidth = page.offsetWidth;
      page.style.height = `${pageWidth / aspectRatio}px`;
    }
  }

  onPrint() {
    window.print();
  }
}

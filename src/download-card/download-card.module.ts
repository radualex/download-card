import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DownloadCardComponent } from "./download-card.component";

@NgModule({
  declarations: [DownloadCardComponent],
  imports: [CommonModule],
  exports: [DownloadCardComponent]
})
export class DownloadCardModule {}

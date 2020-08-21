import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DownloadCardComponent } from "./download-card.component";

@NgModule({
  declarations: [DownloadCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [DownloadCardComponent]
})
export class DownloadCardModule {}

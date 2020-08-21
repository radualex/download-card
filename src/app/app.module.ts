import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DownloadCardModule } from "../download-card/download-card.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DownloadCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

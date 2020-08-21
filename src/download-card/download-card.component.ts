import { Component, OnInit } from "@angular/core";

@Component({
  selector: "download-card",
  templateUrl: "./download-card.component.html",
  styleUrls: ["./download-card.component.css"]
})
export class DownloadCardComponent implements OnInit {
  selectedFile: String = "Select one";

  files: any[] = [
    {
      fileName: "day_1159.sketch",
      option: "Day 1159"
    },
    {
      fileName: "day_1160.sketch",
      option: "Day 1160"
    },
    {
      fileName: "day_1164.sketch",
      option: "Day 1164"
    }
  ];

  downloadFile() {
    if ("Select one" === this.selectedFile) return;

    let link = document.createElement("a");
    link.setAttribute("type", "hidden");
    link.href = `../assets/${this.selectedFile}`;
    link.download = `${this.selectedFile}`;
    link.target = "_blank";
    document.body.querySelector("app-root").append(link);
    link.click();
    link.remove();
  }

  ngOnInit() {}
}

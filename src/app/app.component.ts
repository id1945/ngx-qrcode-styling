import { Component, ViewEncapsulation } from '@angular/core';
import { NgxQrcodeStylingComponent, NgxQrcodeStylingService } from 'ngx-qrcode-styling';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private testDI: NgxQrcodeStylingService) {
    // test DI!
  }

  /**
   * Update
   */
  public onUpdate(qrcode: NgxQrcodeStylingComponent): void {
    qrcode
      .update(qrcode.config, {
        frameOptions: {
          height: 400 + 300,
          width: 325 + 300,
        },
      })
      .subscribe((res) => {
        // TO DO something!
        console.log('update:', res);
        console.log('Element:', res.container.querySelector(qrcode.config.type == 'svg' ? 'svg' : 'canvas'));
      });
  }

  /**
   * Download
   */
  onDownload(qrcode: NgxQrcodeStylingComponent): void {
    qrcode.download().subscribe((res) => {
      // TO DO something!
      console.log('download:', res);
    });
  }
}

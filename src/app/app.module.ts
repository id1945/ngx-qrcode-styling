import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FrameEditComponent } from './frame-edit/frame-edit.component';
import { FramesComponent } from './frames/frames.component';
import { TemplateComponent } from './template/template.component';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';

@NgModule({
  imports: [BrowserModule, NgxQrcodeStylingModule],
  declarations: [AppComponent, TemplateComponent, FrameEditComponent, FramesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

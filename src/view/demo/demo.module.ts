import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DemoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports:[
    DemoComponent
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule { }

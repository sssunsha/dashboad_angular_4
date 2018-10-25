import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServerErrorRoutingModule } from './server-error-routing.module';
import { ServerErrorComponent } from './server-error.component';

@NgModule({
  imports: [
	CommonModule,
	FormsModule,
    ServerErrorRoutingModule
  ],
  declarations: [ServerErrorComponent]
})
export class ServerErrorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
	CommonModule,
	FormsModule,
    NotFoundRoutingModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }

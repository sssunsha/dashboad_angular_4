import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
			CommonModule, 
			FormsModule,
			MeetingsRoutingModule, 
			PageHeaderModule],
    declarations: [MeetingsComponent]
})
export class MeetingsModule {}

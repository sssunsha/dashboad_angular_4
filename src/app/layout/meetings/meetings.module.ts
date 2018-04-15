import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, MeetingsRoutingModule, PageHeaderModule],
    declarations: [MeetingsComponent]
})
export class MeetingsModule {}

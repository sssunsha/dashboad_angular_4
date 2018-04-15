import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, NotificationsRoutingModule, PageHeaderModule],
    declarations: [NotificationsComponent]
})
export class NotificationsModule {}

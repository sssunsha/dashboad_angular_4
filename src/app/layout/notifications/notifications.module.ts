import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
			CommonModule,
			FormsModule,
			NotificationsRoutingModule,
			PageHeaderModule],
    declarations: [NotificationsComponent]
})
export class NotificationsModule {}

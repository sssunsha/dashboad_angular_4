import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { PhoneComponent } from './components/phone/phone.component';
import { MusicComponent } from './components/music/music.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
    imports: [
		CommonModule,
		FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
		StatModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        PhoneComponent,
        MusicComponent,
        VideoComponent
    ]
})
export class DashboardModule {}

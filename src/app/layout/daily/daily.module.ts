import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DailyRoutingModule } from './daily-routing.module';
import { DailyComponent } from './daily.component';
import { PageHeaderModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
			CommonModule,
			FormsModule,
			DailyRoutingModule,
			PageHeaderModule,
			NgbModule.forRoot()],
    declarations: [DailyComponent]
})
export class DailyModule {}

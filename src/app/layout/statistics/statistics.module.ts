import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, StatisticsRoutingModule, PageHeaderModule],
    declarations: [StatisticsComponent]
})
export class StatisticsModule {}

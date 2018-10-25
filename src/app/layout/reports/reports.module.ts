import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
			CommonModule,
			FormsModule,
			ReportsRoutingModule,
			PageHeaderModule],
    declarations: [ReportsComponent]
})
export class ReportsModule {}

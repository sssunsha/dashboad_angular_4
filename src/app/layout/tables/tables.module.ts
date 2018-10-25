import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
			CommonModule,
			FormsModule,
			TablesRoutingModule,
			PageHeaderModule],
    declarations: [TablesComponent]
})
export class TablesModule {}

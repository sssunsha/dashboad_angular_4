import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundsRoutingModule } from './funds-routing.module';
import { FundsComponent } from './funds.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, FundsRoutingModule, PageHeaderModule],
    declarations: [FundsComponent]
})
export class FundsModule {}

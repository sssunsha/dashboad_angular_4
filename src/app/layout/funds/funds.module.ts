import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FundsRoutingModule } from './funds-routing.module';
import { FundsComponent } from './funds.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
			CommonModule,
			FormsModule,
			FundsRoutingModule,
			PageHeaderModule],
    declarations: [FundsComponent]
})
export class FundsModule {}

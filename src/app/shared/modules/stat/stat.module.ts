import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatComponent } from './stat.component';

@NgModule({
	imports: [
			CommonModule,
			FormsModule],
    declarations: [StatComponent],
    exports: [StatComponent]
})
export class StatModule {}

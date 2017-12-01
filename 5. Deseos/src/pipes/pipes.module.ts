import { NgModule } from '@angular/core';
import { ListTitlePipe } from './list-title/list-title';
import { PendientesPipe } from './pendientes/pendientes';
@NgModule({
	declarations: [ListTitlePipe,
    PendientesPipe],
	imports: [],
	exports: [ListTitlePipe,
    PendientesPipe]
})
export class PipesModule {}

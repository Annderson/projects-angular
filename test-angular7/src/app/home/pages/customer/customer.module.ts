import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CustomerComponent } from './customer.component';
import { ShareModule } from './../../../share/share.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    ShareModule,
  ]
})
export class CustomerModule { }

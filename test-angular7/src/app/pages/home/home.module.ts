import { SideBarComponent } from './../../componente/side-bar/side-bar.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    ShareModule,
    HomeRoutingModule
  ],
  exports: [],
  providers: [],
})
export class HomeModule { }

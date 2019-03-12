import { HomeModule } from './pages/home/home.module';
import { OptionComponent } from './pages/option/option.component';
import { LanchesComponent } from './pages/lanches/lanches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { LanchesService } from './service/lanches.service';
import { SideBarComponent } from './componente/side-bar/side-bar.component';
import { Functions6mComponent } from './componente/functions6m/functions6m.component';


@NgModule({
  declarations: [
    AppComponent,
    LanchesComponent,
    OptionComponent,
  ],
  imports: [
    ShareModule,
    HomeModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    ToastrModule
  ],
  providers: [LanchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

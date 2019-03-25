import { OptionComponent } from './pages/option/option.component';
import { LanchesComponent } from './pages/lanches/lanches.component';
import { CadLancheComponent } from './pages/cad-lanche/cad-lanche.component';
import { HomeModule } from './pages/home/home.module';
import { ShareModule } from './share/share.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';
import { LanchesService } from './service/lanche/lanches.service';
import { UserService } from './service/user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LanchesComponent,
    OptionComponent,
    CadLancheComponent,
  ],
  imports: [
    ShareModule,
    HomeModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  exports: [
    ToastrModule,
    NgxMaskModule
  ],
  providers: [
    LanchesService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

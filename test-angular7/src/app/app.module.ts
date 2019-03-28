import { UserFormService } from 'src/app/service/user-form/user-form.service';
import { OptionComponent } from './pages/option/option.component';
import { LanchesComponent } from './pages/lanches/lanches.component';
import { CadUserComponent } from './pages/cad-user/cad-user.component';
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
    CadUserComponent,
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
    UserService,
    UserFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

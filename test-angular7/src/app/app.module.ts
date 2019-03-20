import { HomeModule } from './pages/home/home.module';
import { OptionComponent } from './pages/option/option.component';
import { LanchesComponent } from './pages/lanches/lanches.component';
import { ShareModule } from './share/share.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { LanchesService } from './service/lanches.service';
import { CadLancheComponent } from './pages/cad-lanche/cad-lanche.component';


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
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  exports: [
    ToastrModule
  ],
  providers: [LanchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

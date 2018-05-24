import { NgModule } from '@angular/core';
import { ContatoComponent } from './contato.component';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'contato', component: ContatoComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ContatoRoutingModule { }


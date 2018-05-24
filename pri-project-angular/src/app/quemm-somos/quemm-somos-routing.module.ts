import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { QuemmSomosComponent } from "./quemm-somos.component";

@NgModule ({
    imports: [
        RouterModule.forChild([
            {path:'quemm-somos',component:QuemmSomosComponent}
        ]),
    ],
    exports: [
        RouterModule
    ]
})
export class QuemmSomosRoutingModule{}
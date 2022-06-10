import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../pipes/replace.pipes";
import { StarComponent } from "../star/star.component";
import { CursInfoComponent } from "./curs-info.component";
import { CursListComponent } from "./curs-list.component";

@NgModule ({
    declarations: [
            CursInfoComponent,
            CursListComponent,
            ReplacePipe,
            StarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
              {
                path: 'curs', component: CursListComponent
              },
              {
                path:'curs/info/:id', component: CursInfoComponent,
              },

            ])   
    ]
})

export class CursModules {

}
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Curs } from "./curs";
import { CursServices } from "./curs.services";

@Component({
    templateUrl: 'curs-info.component.html'
})

export class CursInfoComponent {

    curs: Curs;

    constructor(private activateRoute: ActivatedRoute, private cursServices: CursServices) {
}   
    
    
    ngOnInit(): void{
        this.cursServices.retriveById(+this.activateRoute.snapshot.paramMap.get('id')).subscribe( {
            next: curs => this.curs = curs,
            error: err => console.log('Error', err),
        });
       
    }

    save(): void {
        this.cursServices.save(this.curs).subscribe({
            next: course => console.log('Saved with sucess', course),
            error: err => console.log('Error', err),
        });
    }

}
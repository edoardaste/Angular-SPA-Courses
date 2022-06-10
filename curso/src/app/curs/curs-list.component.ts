import { Component, OnInit } from "@angular/core";
import { Curs } from "./curs";
import { CursServices } from "./curs.services";


@Component ({
    templateUrl: './curs-list.component.html'
})

export class CursListComponent implements OnInit {

    filteredCurses: Curs [] = [];

    _curs: Curs [] = [];

   _filterBy: string;

    constructor(private cursServices: CursServices){}

    ngOnInit(): void {
        this.retrieveAll()
    }

    retrieveAll(): void {
        this.cursServices.retrieveAll().subscribe({
            next: curs => {
                this._curs = curs;
                this.filteredCurses = this._curs;
            },
            error: err => console.log('Error', err)
        });
    }

    deleteById(courseid: number): void {
        this.cursServices.deleteById(courseid).subscribe({
            next: () => {
                console.log('delete with success')
                this.retrieveAll()
            },
            error: err => console.log('ERROR', err)
        })

    }

    set filter(value: string) {
        this._filterBy = value;
        this.filteredCurses = this._curs.filter((curs: Curs) => curs.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1) 
    }
    
    get filter () {
        return this._filterBy;
    }
}
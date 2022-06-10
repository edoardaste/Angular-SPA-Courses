import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Curs } from "./curs";

@Injectable({
    providedIn: 'root',
})
export class CursServices { 
        
        private courseUrl: string = 'http://localhost:3100/api/courses';

        constructor(private httpClient: HttpClient) {

        }

        retrieveAll(): Observable<Curs[]> {
            return this.httpClient.get<Curs[]>(this.courseUrl);
        }

        retriveById(id: number): Observable<Curs> {
            return this.httpClient.get<Curs>(`${this.courseUrl}/${id}`);
        }

        save(course: Curs): Observable<Curs> {
            if(course.id) {
                return this.httpClient.put<Curs>(`${this.courseUrl}/${course.id}`, course);
            } else {
                return this.httpClient.post<Curs>(`${this.courseUrl}`, course);
            }
        }

        deleteById(id: number): Observable<any>{
            return this.httpClient.delete<any>(`${this.courseUrl}/${id}`);

        }
}

    
var COURSES: Curs[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: '11, 2, 2019',
        code: 'XLF-1212',
        rating: 3.0,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
        options: '',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: '11, 4, 2019',
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
        options: '',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 'November, 8, 2019',
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
        options: '',
    },
    {
        id: 4,
        name: 'Angular: Router',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: '11, 16, 2019',
        code: 'OHP-1095',
        rating: 1.0,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
        options: '',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration:  '11, 25, 2019',
        code: 'PWY-9381',
        rating: 5.0,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
        options: '',
    }
];

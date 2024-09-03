import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MockDataService {

    // Mock data for characters and planets
    private mockCharacters = [
        { name: 'Luke Skywalker' },
        { name: 'Darth Vader' },
        { name: 'Leia Organa' },
        { name: 'Han Solo' }
    ];

    private mockPlanets = [
        { name: 'Tatooine' },
        { name: 'Alderaan' },
        { name: 'Hoth' },
        { name: 'Dagobah' }
    ];

    // Loader subjects to simulate loading state
    private charactersLoaderSubject = new BehaviorSubject<boolean>(false);
    private planetsLoaderSubject = new BehaviorSubject<boolean>(false);

    constructor() {}

    // Method to simulate fetching characters from an API
    getCharacters(searchTerm: string): Observable<any[]> {
        // Simulate loading
        this.charactersLoaderSubject.next(true);

        return of(this.mockCharacters.filter(character =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        )).pipe(
            delay(1000), // Simulate network delay
            tap(() => this.charactersLoaderSubject.next(false)) // Stop loader after "fetching"
        );
    }

    // Method to simulate fetching planets from an API
    getPlanets(): Observable<any[]> {
        // Simulate loading
        this.planetsLoaderSubject.next(true);

        return of(this.mockPlanets).pipe(
            delay(1000), // Simulate network delay
            tap(() => this.planetsLoaderSubject.next(false)) // Stop loader after "fetching"
        );
    }

    // Observable to track the loading state of character requests
    getCharactersLoader(): Observable<boolean> {
        return this.charactersLoaderSubject.asObservable();
    }

    // Observable to track the loading state of planet requests
    getPlanetLoader(): Observable<boolean> {
        return this.planetsLoaderSubject.asObservable();
    }
}

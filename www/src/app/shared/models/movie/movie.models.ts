import { Injectable } from '@angular/core';
import { MovieManager } from '../../services/movie/movie.manager';

@Injectable()
export class MovieModels {

    public id: number;
    public name: string;
    public image: string;
    public resume: string;
    public video: string;
    public rating: string;
    public year: string;
    public runtime: string;
    public genre: string;

}

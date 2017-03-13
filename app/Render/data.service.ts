import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IRecord } from './data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {
    private _productUrl = 'http://localhost:8000?dataSet=';

    constructor(private _http: Http) { }

    getProduct(id: number):Observable<IRecord[]>  {
        return this._http.get(this._productUrl+id)
            .map((response: Response) => <IRecord[]> response.json())
    }
}


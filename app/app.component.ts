import { Component, AfterViewInit } from '@angular/core';
import { DataService} from './Render/data.service';
import {IRecord} from "./Render/data";
import { Http, Response } from '@angular/http';


@Component({
    selector: 'pm-app',
    template: `
<div   class="ang-poc">
      <div class="nav-bar"> 
        <div class="nav-menu">
        <div class="nav-item" (click)="requestJson(1)">Render 1 record</div>
        <div class="nav-item" (click)="requestJson(10)">Render 10 records</div>
        <div class="nav-item" (click)="requestJson(100)">Render 100 records</div>
        <div class="nav-item" (click)="requestJson(1000)">Render 1000 records</div>
        <div class="nav-item" (click)="requestJson(10000)">Render 10000 records</div>
        <div class="nav-item" (click)="requestJson(100000)">Render 100000 records</div>
        </div>
      </div>
      <div *ngIf="show" class='container'>
       <div>
         <p class="renderData">DOM load for {{id}} records in ANGULAR 2 </p>
        <table>
         <tr>
         <th>Id</th>
         <th>Name</th>
         <th>Gender</th>
          <th>Age</th>
         <th>Marks</th>
        </tr>
         <tbody>
         <tr *ngFor='let trow of trow'>
         <td>{{trow._id}}</td>
         <td> {{trow.name}}</td>
          <td>{{trow.gender}}</td>
         <td>{{trow.age}}</td>
         <td>{{trow.marks}}</td>
         </tr>
         </tbody>
         </table>
      </div> 
    <div>
    <div class= "displayStat">
    <p class="stat-head">DOM RENDERING TIME  </p>
     <div><p> Complete time to for request to render {{complete}}</p></div>
      <div><p> testing change in value {{trial}}</p></div>
     </div>  
     <button class="update-button" (click)="update(id)">Update Records</button>
     </div>
      
      </div>
</div>
    `,
    providers: [DataService]
})
export class AppComponent implements AfterViewInit{
    trow : IRecord[];t:number;
    id: number;trial:string;
    complete: number;
    show: boolean = false;
    requestJson(id: number){
        this.id = id;
        this.dataService.getProduct(id)
            .subscribe(
                trow =>
                 {this.trow = trow;
                  this.trial = "request";
                  window.performance.mark("startLoad");
                 }
            );
        this.show = true;
    }
    update(id:number){

        this._http.get('app/list/record'+id+'.json').
        map((res: Response) => res.json()).
        subscribe(
        res =>
        {this.trow = res;
        this.trial = "update";
            window.performance.mark("startLoad");
        }
        );
    }
    ngAfterViewInit()
    {   if (window.performance.getEntriesByName("startLoad").length != 0) {
        window.performance.mark("endLoading");
        window.performance.measure("name", "startLoad", "endLoading");
        var array = window.performance.getEntriesByType('measure');
        console.log(array[array.length - 1].duration);
        window.performance.clearMarks();
        window.performance.clearMeasures();
    }
    }
    constructor(private dataService: DataService, private _http: Http) {
    }
}

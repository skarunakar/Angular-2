import { Component } from '@angular/core';
import { DataService} from './Render/data.service'
import {IRecord} from "./Render/data"

@Component({
    selector: 'pm-app',
    template: `
     <div class="ang-poc">
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
         <div class='container'> 
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
     </div>
    `,
    providers: [DataService]
})
export class AppComponent {
    trow : IRecord[];
    requestJson(id: number){
        this.dataService.getProduct(id)
            .subscribe(
                trow => this.trow = trow.var
            );
    }

    constructor(private dataService: DataService) {}
}

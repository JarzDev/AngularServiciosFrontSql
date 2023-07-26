import { Component } from '@angular/core';
import { Servs } from '../interfaces/servs';
import { ServsService } from '../services/servs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-serv',
  templateUrl: './view-serv.component.html',
  styleUrls: ['./view-serv.component.css']
})
export class ViewServComponent {

  servicios: Servs[] = [];

  constructor( private servSrv: ServsService, private router: Router) {
    this.servSrv.getAllServs().subscribe((data: Servs[]) => {
      this.servicios = data;
      console.log(data);
    }
    );
  }

  verid(id:number){
    // alert(id);
    this.router.navigate(['printserv',id]);
  } 

}

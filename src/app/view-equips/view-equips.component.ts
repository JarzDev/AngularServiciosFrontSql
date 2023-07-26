import { Component } from '@angular/core';
import { Equips } from '../interfaces/equips';
import { EquipsService } from '../services/equips.service';

@Component({
  selector: 'app-view-equips',
  templateUrl: './view-equips.component.html',
  styleUrls: ['./view-equips.component.css']
})
export class ViewEquipsComponent {
  equipos: Equips[] = [];

  constructor( private equipoSrv: EquipsService) {
    this.equipoSrv.getAllEquips().subscribe((data: Equips[]) => {
      this.equipos = data;
      console.log(data);
    }
    );
  }

}

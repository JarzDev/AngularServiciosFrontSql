import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServsService } from '../services/servs.service';


@Component({
  selector: 'app-print-serv',
  templateUrl: './print-serv.component.html',
  styleUrls: ['./print-serv.component.css']
})
export class PrintServComponent  {
  servicio: any={  }

  constructor( private activeRouter: ActivatedRoute, private router:Router, private servSvr: ServsService) {
    let id = this.activeRouter.snapshot.params['id'];
    this.servSvr.getServsById(id).subscribe(
      (data) => {
      console.log(data);
      this.servicio = data;
    }
    );
    
   
    
  }
   imprimir(){
    window.print();
}

}

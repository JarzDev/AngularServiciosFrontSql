import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServsService } from '../services/servs.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servicio, Servs } from '../interfaces/servs';
import { EquipsService } from '../services/equips.service';


@Component({
  selector: 'app-new-serv',
  templateUrl: './new-serv.component.html',
  styleUrls: ['./new-serv.component.css']
})
export class NewServComponent  {

 equipos = this.equipSvr.getAllEquips();
 form!: FormGroup;
 serv: Servs = new Servicio();

  constructor(private servSvr:ServsService, private router:Router, private fb:FormBuilder, private equipSvr: EquipsService   ) {

    this.equipos = this.equipSvr.getAllEquips();
    this.form = this.fb.group({
      name_serv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      fecha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      recomendaciones: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      partes: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      horas_serv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      equipo: [0,]
      });
}
  

createServ(){

  this.serv.name_serv = this.form.value.name_serv;
    this.serv.fecha = this.form.value.fecha;
    this.serv.descripcion = this.form.value.descripcion;
    this.serv.recomendaciones = this.form.value.recomendaciones;
    this.serv.partes = this.form.value.partes;
    this.serv.horas_serv = this.form.value.horas_serv;
    this.serv.equipo_id = this.form.value.equipo;
    if(0==0){
      console.log(this.serv);
    this.servSvr.createServs(this.serv).subscribe(
      data => {
        console.log(data);
       alert("Servicio creado", );
        
        
       
        
        this.router.navigate(["viewserv"]);
      }
    );}else{
      alert("Error al crear servicio");
    }
}

  onSelect(id:number){
    this.form.value.equipo = id;
    console.log(id);
  }

  get name(){
    return this.form.get('servicio');
  }



}

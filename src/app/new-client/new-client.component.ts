import { Component } from '@angular/core';
import { ClientService } from '../services/clients.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../interfaces/client';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {
  id : number;
 operacion ="Crear"
  
  rutValido = "^[0-9]+[-|‐]{1}[0-9kK]{1}$";
  
  form : FormGroup;
  constructor(private clientSrv: ClientService,
              private fb: FormBuilder,
              private router: Router,
              private aRoute: ActivatedRoute) {

                  this.form = this.fb.group({
                  empresa: ['', [ Validators.minLength(1), Validators.maxLength(20)]],
                  rut: ['',[ Validators.pattern(this.rutValido)]],
                  direccion: ['',[ Validators.maxLength(20)]],
                  
})
this.id = Number(aRoute.snapshot.paramMap.get('id'));
    console.log(this.id);

    this.getClientByID(this.id);

    if(this.id != 0){
      this.operacion = "Editar"
    }else{
      this.operacion = "Agregar"
      
    }
}


getClientByID(id){

    this.clientSrv.getClientById(id).subscribe((data:Client) => {
      this.form.patchValue(data);
      this.form.patchValue({
      
        empresa: data.empresa,
        rut: data.rut,
        direccion: data.direccion
})
    } );
  }

  createClient(){
    if(this.id == 0){
      this.operacion = "Crear"
      if(this.form.valid){
        const client : Client = this.form.value;
        this.clientSrv.createClient(client).subscribe(() => {
          alert("Cliente Creado");
          this.router.navigate(['/viewclient'])
        });
      }else{
        alert("Formulario invalido");
      }
    }else{
      this.operacion = "Editar"
      if(this.id != 0){
        if(this.form.valid){
        const client : Client = this.form.value;
        this.clientSrv.updateClient(this.id, client).subscribe(() => {
          alert("Cliente Editado");
          this.router.navigate(['/viewclient'])
          });
        }
     }else{
        alert("Formulario invalido");
     }
    }
  }
}

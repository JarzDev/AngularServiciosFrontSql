import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto, Contacts } from '../interfaces/contacts';
import { ClientService } from '../services/clients.service';


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {
  id : number;
  operacion ="Crear"
  form: FormGroup;
  clientes = this.clientSvr.getAllClients();
  
  cont: Contacts = new Contacto();


  
  constructor(private contactSrv: ContactsService,
     private fb: FormBuilder, 
     private router: Router,
      private clientSvr:ClientService, 
      private aRoute: ActivatedRoute,
      private contactSvr: ContactsService) {

this.clientes = this.clientSvr.getAllClients();
console.log(this.clientes);

    this.form = this.fb.group({
    id: [''],
      nombre: ['', [ Validators.minLength(3), Validators.maxLength(40)]],
      apellido: ['', [ Validators.minLength(3), Validators.maxLength(40)]],
      correo: ['', [ Validators.minLength(3), Validators.maxLength(40)]],
      telefono: ['', [ Validators.minLength(3), Validators.maxLength(40)]],
      empresas: [0,],
    })

    this.id = Number(aRoute.snapshot.paramMap.get('id'));
   
    if(this.id == 0){
      this.operacion = "Crear"
    }else{
      this.operacion = "Editar"
      }
    
   
    console.log(this.id);
    
    this.getContactByID(this.id);

    }

    getContactByID(id){

      this.contactSvr.getContactsById(id).subscribe((data:Contacts) => {
        this.form.patchValue(data);
        this.form.patchValue({
         id: data.id,
          nombre: data.nombre,
          apellido: data.apellido,
          correo: data.correo,
          telefono: data.telefono
         
        })
      } );
    }
    

  onSelect(idemp:any):void{
    this.form.value.empresas = idemp;
    console.log(idemp); 
  }



  get name(){
    return this.form.get('name');
  }

  newContact(){
    this.cont.nombre = this.form.value.nombre;
    this.cont.apellido = this.form.value.apellido;
    this.cont.telefono = this.form.value.telefono;
    this.cont.correo = this.form.value.correo;
    this.cont.cliente_id = this.form.value.empresas;
    console.log(this.cont);

    
    if(this.id == 0){
    this.operacion = "Crear"
   if(this.form.valid){
   alert("Contacto creado", );
   let data = this.cont;
    this.contactSrv.createContacts(data).subscribe(
      (data) => {
        console.log(data);
      },
    );
   
        this.router.navigate(["viewcontact"]);
      }
    
    
    else{ 
      alert("Debe completar todos los campos");
    }
  }else{
    this.operacion = "Editar"
    if(this.form.valid){
      const contact : Contacts = this.form.value;
      this.contactSrv.updateContacts(this.id, contact).subscribe(() => {
        alert("Contacto Editado");
        this.router.navigate(['/viewcontact'])
        });
   }else{
      alert("Formulario invalido");
   }
  }
}

}

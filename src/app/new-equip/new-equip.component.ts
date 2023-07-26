import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipsService } from '../services/equips.service';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Equipo, Equips } from '../interfaces/equips';
import { ContactsService } from '../services/contacts.service';


@Component({
  selector: 'app-new-equip',
  templateUrl: './new-equip.component.html',
  styleUrls: ['./new-equip.component.css']
})
export class NewEquipComponent {
  id : number;
  operacion ="Crear"
  contactos = this.contactSvr.getAllContacts();
  form: FormGroup;

equip: Equips = new Equipo();

  constructor(private equipSvr:EquipsService, 
    private router:Router, 
    private fb:FormBuilder, 
    private contactSvr: ContactsService,
    private aRoute: ActivatedRoute) 
    { 
    this.contactos = this.contactSvr.getAllContacts();
    console.log(this.contactos);
    this.form = this.fb.group({
      marca: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]], 
      modelo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]], 
      serial: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      contador: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      contacto: [0,]
     });
     this.id = Number(aRoute.snapshot.paramMap.get('id'));
     if(this.id == 0){
      this.operacion = " Crear"
    }else{
      this.operacion = " Editar"
      }
    console.log(this.id);
    this.getContactByID(this.id);

 }

 getContactByID(id){

  this.equipSvr.getEquipsById(id).subscribe((data:Equips) => {
    this.form.patchValue(data);
    this.form.patchValue({
     id: data.id,
      marca: data.marca,
      modelo: data.modelo,
      serial: data.serial,
      contador: data.contador,
     
    })
  } );
}

onSelect(idepq:number){
  this.form.value.contacto = idepq;
  console.log(idepq); 
}

get name(){
  return this.form.get('name');
}


 createEquip(){
  this.equip.marca = this.form.value.marca;
    this.equip.modelo = this.form.value.modelo;
    this.equip.serial = this.form.value.serial;
    this.equip.contador = this.form.value.contador;
    this.equip.contacto_id = this.form.value.contacto;

    if(this.id == 0){
      if(this.form.valid){
     this.equipSvr.createEquips(this.equip).subscribe(
      data => {
        console.log(data);
       alert("Equipo creado", );
        
        
        
        this.router.navigate(["viewequips"]);
      }
    );}else{
      alert("Error al crear equipo");
    }
  }else{
    this.operacion = "Editar"
    if(this.form.valid){
      const equips: Equips = this.form.value;
      this.equipSvr.updateEquips(this.id, equips).subscribe(()  => {
        alert("Equipo editado");
        this.router.navigate(["viewequips"]);
      });
  }else{
    alert("Error al editar equipo");
  }
 }
}

 

}

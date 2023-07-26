// Objetivo: Definir la estructura de los datos de los contactos
export interface Contacts  {
    id?: number;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    cliente_id?: number;
    
}

export class Contacto {
    id?:         number;
    nombre:     string = '';
    apellido:   string  = '';
    correo:     string = '';
    telefono:   string = '';
    cliente_id?: number;
        
    };


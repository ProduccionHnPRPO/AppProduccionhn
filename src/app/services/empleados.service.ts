import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados, EmpleadosWithoutID } from '../models/empleados';
const ENDPOINT = 'empleados';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
  getAllEmpleados(){
    return this.http.get<Empleados[]>(`https://produccionhn.herokuapp.com/${ENDPOINT}`)
  }

  //POST
  postEmpleados(empleados:EmpleadosWithoutID){
    return this.http.post(`https://produccionhn.herokuapp.com/${ENDPOINT}`,empleados);
  }

  //PUT
  putEmpleados(id:string,empleados:EmpleadosWithoutID){
    return this.http.put(`https://produccionhn.herokuapp.com/${ENDPOINT}/${id}`,empleados)
  }

  //PATCH
  patchEmpleados(id:string,empleados:EmpleadosWithoutID){
    return this.http.patch(`https://produccionhn.herokuapp.com/${ENDPOINT}/${id}`,empleados)
  }

  //DELETE
deleteEmpleados(id:string){
    return this.http.delete(`https://produccionhn.herokuapp.com/${ENDPOINT}/${id}`)
  }
}


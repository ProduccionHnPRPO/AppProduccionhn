import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produccion, ProduccionWithoutID } from '../models/produccion';


const ENDPOINT = 'produccions';

@Injectable({
  providedIn: 'root'
})
export class ProduccionService {

  constructor(
    private http: HttpClient
  ) { }
  
 //GET
  getAllProduccion(){
    return this.http.get<Produccion[]>(`https://produccionhn.herokuapp.com/${ENDPOINT}`)
  }

  //POST
  postProduccion(produccion:ProduccionWithoutID){
    return this.http.post(`https://produccionhn.herokuapp.com/${ENDPOINT}`,produccion);
  }

  //PUT
  putProduccion(id:string,produccion:ProduccionWithoutID){
    return this.http.put(`https://produccionhn.herokuapp.com/${ENDPOINT}/${id}`,produccion)
  }

  //PATCH
  patchProduccion(id:string,produccion:ProduccionWithoutID){
    return this.http.patch(`https://produccionhn.herokuapp.com/${ENDPOINT}/${id}`,produccion)
  }

  //DELETE
deleteProduccion(id:string){
    return this.http.delete(`https://produccionhn.herokuapp.com/${ENDPOINT}/${id}`)
  }
}


import { Component } from '@angular/core';
//import { Produccion } from 'src/app/api/models';
import { ProduccionControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produccion } from 'src/app/models/produccion';
import { ProduccionService } from 'src/app/services/produccion.service';

@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html'
})
export class ProduccionComponent {
  listOfData: Produccion[] = [];
  http: any;
  form!: FormGroup;
  visible = false;
  accion:boolean=true;
  idModificar:string='';
  constructor(
    private produccionService:ProduccionService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder
  ){this.buildForm();}
  
  private buildForm() {
    this.form = this.formBuilder.group({
      producto: [''],
      cantidad: [''],
      destino: ['']
    });
  }
  ngOnInit(): void {
    this.produccionService.getAllProduccion().toPromise().then(
      (data: Produccion[]) => this.listOfData = data
    )
  }

  delete(id: string) {
    this.produccionService.deleteProduccion(id).toPromise().then(() => {
      this.nzMessageService.warning('El registro fue eliminado con exito!');
      this.listOfData = this.listOfData.filter(x => x.id !== id);
    }, (error) => {
      this.nzMessageService.error('El registro no pudo ser eliminado, por favor intente de nuevo');
      console.error(error);
    })
  }

  cancel(): void {
    this.nzMessageService.info('Su registro sigue activo! =D')
  }

  open(): void {
    this.visible = true;
    this.accion=true;
  }

  close(): void {
    this.visible = false;
    this.buildForm();
  }

  guardar(): void {
    if (this.accion) {
      this.produccionService.postProduccion(this.form.value).toPromise().then((data: any) => {
        //this.listOfHardware.push(data);
        this.nzMessageService.success('El registro fue ingresado con exito!');
        this.listOfData = [...this.listOfData, data]
        //Limpia el formulario y lo cierra
        this.buildForm();
        this.visible = false;
      }, (error) => {
        this.nzMessageService.error('El registro no pudo ser ingresado, por favor intente de nuevo');
        console.error(error);
      })
    }else{
      this.produccionService.putProduccion(this.idModificar,this.form.value).toPromise().then(()=>{
        for(let elemento of this.listOfData.filter(x=>x.id===this.idModificar)){
          elemento.producto=this.form.value.producto;
          elemento.cantidad= this.form.value.cantidad;
          elemento.destino= this.form.value.destino;
        }
        this.visible = false;
        this.nzMessageService.success('El registro fue actualizado con exito!');
      }, (error) => {
        this.nzMessageService.error('El registro no pudo ser actualizado, por favor intente de nuevo');
        console.error(error);
      })
    }
  }

  modificar(item:Produccion):void{
    this.accion=false;
    this.idModificar=item.id;
    this.visible = true;
    this.form=this.formBuilder.group({
      producto: [item.producto],
      cantidad: [item.cantidad],
      destino: [item.destino]
    })
  }

  submitForm(): void {
    for (const i in this.form?.controls) {
      this.form?.controls[i].markAsDirty();
      this.form?.controls[i].updateValueAndValidity();
    }
  }
}

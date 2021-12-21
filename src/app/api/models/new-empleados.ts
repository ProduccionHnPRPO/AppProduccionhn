/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Empleados, 'id'>, schemaOptions: { title: 'NewEmpleados', exclude: [ 'id' ] })
 */
export interface NewEmpleados {
  apellido: string;
  cargo: string;
  dni: string;
  edad: number;
  nombre: string;

  [key: string]: any;
}

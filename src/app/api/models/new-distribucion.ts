/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Distribucion, 'id'>, schemaOptions: { title: 'NewDistribucion', exclude: [ 'id' ] })
 */
export interface NewDistribucion {
  correo: string;
  lugar: string;
  personaCargo: string;
  producto: string;
  tienda: string;

  [key: string]: any;
}

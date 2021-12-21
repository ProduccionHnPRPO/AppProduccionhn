/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Produccion, 'id'>, schemaOptions: { title: 'NewProduccion', exclude: [ 'id' ] })
 */
export interface NewProduccion {
  cantidad: number;
  destino: string;
  producto: string;

  [key: string]: any;
}

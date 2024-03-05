import { Ingreso } from "./ingreso.model";

export class IngresoServicio {
    //definição array ingressos
    ingresos: Ingreso[] = [
        new Ingreso("Salário", 4000),
        new Ingreso("Venta de coche", 500),
    ];
}
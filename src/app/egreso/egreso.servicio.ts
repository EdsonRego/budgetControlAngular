import { Egreso } from "./egreso.model";

export class EgresoServicio{
    //Definição array egressos
    egresos:Egreso[]=[
        new Egreso("Renta depto", 900),
        new Egreso("Roupa",200)
    ];
}
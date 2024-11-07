export interface Viajee {
    id: string;
    origen : string;
    destino: string;
    fecha: Date;
    
    pasajeros?: { [usuarioId: string]: 'aceptado' | 'rechazado' | 'pendiente' };
  }
export class Usuario{
    constructor(
        public usuario: number,
        public registroAcademico: string,
        public nombre: string,
        public apellido: string,
        public email: string,
        public fecha: string //probar con date
    ){}
}
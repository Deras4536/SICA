
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    codigo: {
        type: String,
        required: false,
    },
    nombre: {
        type: String,
        default: 'ANGEL A DERAS P - 2504212017',
    },
    nombreproyecto: {
        type: String,
        required: false,
    },
    monto: {
        type: String,
        required: false,
    },
    paisqueejecuta: {
        type: String,
        default: 'GUATEMALA',
    },
    fecha: {
        type: String,
        default: new Date().toLocaleDateString()
    },
    fechacierre:{
        type: String,
        default: null,  
    }
});

module.exports = model( 'Usuario', UsuarioSchema); 

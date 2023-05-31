// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    // Buat Schema data
    nidn: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    jenis_kelamin: {
        type: String,
        required: true
    },
    umur:{
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Dosen', Schema)
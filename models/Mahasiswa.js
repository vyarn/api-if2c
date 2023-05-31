// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const Schema = mongoose.Schema({

    // Buat Schema data
    npm: {
        type: Number,
        require: true
    },
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Mahasiswa', Schema)
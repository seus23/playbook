
const objeto3 = {
    nombreGrupo: 'System Of A Down',
    fechaInicio: 1994,
    integrantesName: ['Serj Tankian','Daron Malakian','Shavo Odadjian','John Dolmayan','Ontronik Khachaturian'],
    nominaciones: [
        {año:2002, trabajoNominado: 'Chop Suey!'},
        {año:2003, trabajoNominado: 'Aerials'},
        {año:2006, trabajoNominado: 'B.Y.O.B.'},
        {año:2007, trabajoNominado: 'Lonely Day'}
    ]
}

console.log('El grupo es ', objeto3.nombreGrupo);
console.log('los integrantes son ', objeto3.integrantesName);
console.log('nominados en ', objeto3.nominaciones[2].año, 'por ', objeto3.nominaciones[2].trabajoNominado);

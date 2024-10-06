window.onload = function() {
  let inicio = "Un ";
  let adjetivos = [
    "horrible ",
    "gigantesco ",
    "loco ",
    "despistado ",
    "rápido ",
    "oloroso ",
    "brillante ",
    "perezoso ",
    "anciano "
  ];
  let sustantivos = [
    "señor ",
    "gatito ",
    "perro ",
    "vendedor de callcenter ",
    "conductor ",
    "comediante ",
    "erizo "
  ];
  let acciones = [
    "se llevó mi ",
    "tiró mi ",
    "gritó a mi ",
    "pateó mi ",
    "robó mi ",
    "quemó mi ",
    "mordió mi ",
    "golpeó mi "
  ];
  let posesiones = [
    "móvil ",
    "coche ",
    "reloj ",
    "teléfono ",
    "camisa ",
    "coche ",
    "mechero ",
    "bocadillo "
  ];
  let lugares = [
    "en Murcia",
    "en el baño de mi curro",
    "en el Río Turia",
    "frente a la oficina",
    "en mi habitación",
    "en la estación de autobuses",
    "al lado del baño"
git add .  ];

  let rdm1 = Math.floor(Math.random() * adjetivos.length);
  let rdm2 = Math.floor(Math.random() * sustantivos.length);
  let rdm3 = Math.floor(Math.random() * acciones.length);
  let rdm4 = Math.floor(Math.random() * posesiones.length);
  let rdm5 = Math.floor(Math.random() * lugares.length);

  let excusa =
    inicio +
    adjetivos[rdm1] +
    sustantivos[rdm2] +
    acciones[rdm3] +
    posesiones[rdm4] +
    lugares[rdm5];

  document.querySelector("#excusa").innerHTML = excusa;
};

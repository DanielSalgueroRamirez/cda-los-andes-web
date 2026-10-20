export const site = {
  name: "CDA Los Andes",
  city: "Ipiales, Nariño",
  address: "Carrera 7 # 25-62",
  phone: "3336040372",
  phoneHref: "3336040372",
  whatsapp: "3336040372",
  email: "cdalosandes25@gmail.com",
  maps: "https://www.google.com/maps/place/Cra+7+%2325-62,+Ipiales,+Nari%C3%B1o/@0.8288991,-77.6566535,17z/data=!3m1!4b1!4m5!3m4!1s0x8e296be075b940f7:0xca926fb6ed1273f!8m2!3d0.8288937!4d-77.6517826?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D",
};
export const wa = (
  message = "Hola, quiero información sobre la revisión técnico-mecánica.",
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
export const services = [
  [
    "01",
    "Vehículos livianos",
    "Revisión técnico-mecánica y de emisiones para automóviles, camperos y camionetas.",
  ],
  [
    "02",
    "Motocicletas",
    "Línea de inspección especializada con un proceso técnico claro y eficiente.",
  ],
  [
    "03",
    "Emisiones",
    "Evaluación de gases y emisiones dentro del proceso reglamentario aplicable.",
  ],
];

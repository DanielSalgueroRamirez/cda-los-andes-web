export const site = {
  name: "CDA Los Andes",
  city: "Ipiales, Nariño",
  address: "Carrera 7 # 25-62",
  phone: "3336040372",
  phoneHref: "+573336040372",
  whatsapp: "573336040372",
  email: "cdalosandes25@gmail.com",

  maps:
    "https://www.google.com/maps/place/Cra+7+%2325-62,+Ipiales,+Nari%C3%B1o/@0.8288991,-77.6566535,17z/data=!3m1!4b1!4m5!3m4!1s0x8e296be075b940f7:0xca926fb6ed1273f!8m2!3d0.8288937!4d-77.6517826?entry=ttu",

  instagram: {
    name: "@cdalosandesipiales",
    url: "https://www.instagram.com/cdalosandesipiales/",
  },

  facebook: {
    name: "CDA Los Andes",
    url: "https://www.facebook.com/profile.php?id=61594876078519",
  },

  tiktok: {
    name: "@cdalosandesipiales",
    url: "https://www.tiktok.com/@cdalosandesipiales",
  },
};

export const wa = (
  message = "Hola, quiero información sobre la revisión técnico-mecánica.",
) => {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const services = [
  [
    "",
    "Vehículos livianos",
    "Revisión técnico-mecánica y de emisiones para automóviles de servicio particular o público.",
  ],
  [
    "",
    "Camperos",
    "Revisión técnico-mecánica y de emisiones para camperos y camionetas de baja tonelada.",
  ],
  [
    "",
    "Vehículos eléctricos e híbridos",
    "Inspección técnico-mecánica para vehículos eléctricos e híbridos livianos, de acuerdo con los requisitos aplicables.",
  ],
];
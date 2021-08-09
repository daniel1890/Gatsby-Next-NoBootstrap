export const MenuItems = [
  {
    title: "Over Ons",
    url: "/over-ons",
    cName: "nav-links",
    dropDown: "",
  },
  {
    title: "Cliënten",
    url: "/clienten/client",
    cName: "nav-links",
    dropDown: [
      {
        title: "Cliënt",
        path: "/clienten/client",
        cName: "dropdown-link",
      },

      {
        title: "Cliënttevredenheid",
        path: "/clienten/client-tevredenheid",
        cName: "dropdown-link",
      },
    ],
  },
  {
    title: "Verwijzers",
    url: "/verwijzers",
    cName: "nav-links",
    dropDown: "",
  },
  {
    title: "Rooster",
    url: "#",
    cName: "nav-links",
    dropDown: "",
  },
  {
    title: "0636353066",
    url: "#",
    cName: "nav-links",
    dropDown: "",
    icon: "faPhoneAlt",
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links-mobile",
    dropDown: "",
  },
]

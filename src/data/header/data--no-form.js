const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  variant: "eu",
  head: {
    attributes: new drupalAttribute().addClass(["w-100", "shadow-sm"]),
    disable_collapse: true,
    brand: {
      link: "/example.html",
      logos: [
        {
          class: "d-none d-lg-block",
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/standard-version/positive/logo-eu--en.svg",
          alt: "desktop european union logo",
        },
        {
          class: "d-lg-none",
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/condensed-version/positive/logo-eu--en.svg",
          alt: "mobile european union logo",
        },
      ],
    },
    navigation: {
      items: [
        {
          label: "<span class='d-block d-lg-inline-block'>English</span>",
          path: "/example.html",
          icon_position: "before",
          remove_icon_spacers: true,
          icon: {
            name: "chat-left-dots-fill",
            size: "xs",
            path: "/icons.svg",
            attributes: new drupalAttribute().addClass("me-lg-2-5"),
          },
          attributes: new drupalAttribute()
            .setAttribute("data-bs-toggle", "modal")
            .setAttribute("data-bs-target", "#languageModal")
            .addClass("text-center"),
        },
        {
          label: "<span class='d-block d-lg-inline-block'>Log in</span>",
          path: "/example.html",
          icon_position: "before",
          remove_icon_spacers: true,
          icon: {
            name: "person-fill",
            size: "xs",
            path: "/icons.svg",
            attributes: new drupalAttribute().addClass("me-lg-2-5"),
          },
          attributes: new drupalAttribute()
            .setAttribute("data-bs-toggle", "modal")
            .setAttribute("data-bs-target", "#loginModal")
            .addClass("text-center"),
        },
      ],
    },
  },
  navbar: {
    color_set: "dark",
    collapse_id: "navbarNavDropdown",
    attributes: new drupalAttribute().addClass("bcl-header__navbar"),
    navigation: {
      navbar: true,
      attributes: new drupalAttribute().addClass("me-auto"),
      items: [
        {
          label: "Home",
          path: "/example.html",
          active: true,
          attributes: new drupalAttribute().setAttribute(
            "aria-current",
            "page"
          ),
        },
        {
          label: "Item 01",
          path: "/example.html",
        },
        {
          label: "Item 02",
          path: "/example.html",
        },
        {
          id: "navbarDropdownMenuLink",
          link: true,
          dropdown: true,
          trigger: {
            label: "Dropdown link",
            path: "/example.html",
            attributes: new drupalAttribute().addClass("nav-link"),
          },
          items: [
            {
              label: "Action",
              path: "/example.html",
            },
            {
              label: "Another action",
              path: "/example.html",
            },
            {
              label: "Something else here",
              path: "/example.html",
            },
          ],
        },
      ],
    },
  },
  modals: [
    {
      id: "loginModal",
      header: `<h5 class="modal-title" id="loginModalLabel">Log in</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`,
      body: `<h5>Disclaimer 1</h5>
        ${getDummyText(3, true)}
        <h5>Disclaimer 2</h5>
        ${getDummyText(3, true)}`,
      footer: `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary">Access EU login</button>`,
    },
  ],
  language_modal: {
    id: "languageModal",
    title: "Select your language",
    icon_path: "/icons.svg",
    close_label: "Close",
    overlay: true,
    items: [
      {
        label: "български",
        lang: "bg",
      },
      {
        label: "español",
        lang: "es",
      },
      {
        label: "čeština",
        lang: "cs",
      },
      {
        label: "dansk",
        lang: "da",
      },
      {
        label: "Deutsch",
        lang: "de",
      },
      {
        label: "eesti",
        lang: "et",
      },
      {
        label: "ελληνικά",
        lang: "el",
      },
      {
        label: "English",
        active: true,
        lang: "en",
      },
      {
        label: "français",
        lang: "fr",
      },
      {
        label: "Gaeilge",
        lang: "ga",
      },
      {
        label: "hrvatski",
        lang: "hr",
      },
      {
        label: "italiano",
        lang: "it",
      },
      {
        label: "latviešu",
        lang: "lv",
      },
      {
        label: "lietuvių",
        lang: "lt",
      },
      {
        label: "magyar",
        lang: "hu",
      },
      {
        label: "Malti",
        lang: "mt",
      },
      {
        label: "Nederlands",
        lang: "nl",
      },
      {
        label: "polski",
        lang: "pl",
      },
      {
        label: "português",
        lang: "pt",
      },
      {
        label: "română",
        lang: "ro",
      },
      {
        label: "slovenčina",
        lang: "sk",
      },
      {
        label: "slovenščina",
        lang: "sl",
      },
      {
        label: "suomi",
        lang: "fi",
      },
      {
        label: "svenska",
        lang: "sv",
      },
    ],
  },
  breadcrumbs: {
    attributes: new drupalAttribute().addClass(["mt-3"]),
    links: [
      { label: "Home", path: "/example.html" },
      {
        label: "European Union",
        path: "/example.html",
      },
      {
        label: "About the European Union",
        path: "/example.html",
      },
      { label: "News" },
    ],
    icon_path: "/icons.svg",
  },
};

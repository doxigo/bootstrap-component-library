const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  variant: "ec",
  site_name: "Project name",
  project_logo: {
    path: "https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg",
    classes: "d-none d-lg-inline-block",
    alt: "project logo",
  },
  head: {
    attributes: new drupalAttribute()
      .addClass(["w-100", "shadow-sm"])
      .setAttribute("aria-label", "Top Navigation"),
    disable_collapse: true,
    brand: {
      logos: [
        {
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/ec/images/logo/logo-ec--en.svg",
          alt: "european commission logo",
        },
      ],
    },
    navigation: {
      items: [
        {
          label: "Link",
          icon_position: "before",
          icon: {
            name: "link",
            path: "/icons.svg",
          },
          attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
        },
        {
          label: "Link",
          icon_position: "before",
          icon: {
            name: "link",
            path: "/icons.svg",
          },
          attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
        },
        {
          label: "<span class='d-block d-lg-inline-block'>English</span>",
          path: "#",
          icon_position: "before",
          remove_icon_spacers: true,
          icon: {
            name: "chat-left-dots-fill",
            size: "xs",
            path: "/icons.svg",
            attributes: new drupalAttribute().addClass("me-lg-2-5"),
          },
          id: "modal-trigger",
          attributes: new drupalAttribute()
            .setAttribute("data-bs-toggle", "modal")
            .setAttribute("data-bs-target", "#languageModal")
            .addClass("text-center"),
        },
        {
          label: "<span class='d-block d-lg-inline-block'>Log in</span>",
          path: "#",
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
        {
          label: "<span class='badge bg-danger'>5</span>",
          path: "#",
          remove_icon_spacers: true,
          icon_position: "before",
          icon: {
            name: "bell-fill",
            size: "s",
            path: "/icons.svg",
          },
          attributes: new drupalAttribute().addClass([
            "notification",
            "mt-2",
            "mt-lg-0",
          ]),
        },
      ],
    },
  },
  navbar: {
    color_set: "dark",
    collapse_id: "navbarNavDropdown",
    attributes: new drupalAttribute().addClass("bcl-header__navbar"),
    form: {
      attributes: new drupalAttribute().addClass(["d-flex", "mt-3", "mt-lg-0"]),
      submit: {
        variant: "light",
        assistive_text: "search",
        icon: {
          name: "search",
          size: "xs",
          path: "/icons.svg",
        },
        attributes: new drupalAttribute().addClass([
          "border-start-0",
          "rounded-0",
          "rounded-end",
        ]),
      },
      items: [
        [
          {
            type: "text",
            required: true,
            label: "Search",
            hidden_label: true,
            placeholder: "Search",
            id: "inlineFormInputGroupSearch",
            attributes: new drupalAttribute().addClass([
              "border-start-0",
              "rounded-0",
              "rounded-start",
            ]),
          },
        ],
      ],
    },
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
            path: "#",
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
            {
              label:
                "Very long label with custom text and custom link as an example",
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
    variant: "ec",
    icon_path: "/icons.svg",
    close_label: "Close",
    overlay: true,
    items: [
      {
        label: "български",
        lang: "bg",
        path: "/example.html#bg",
      },
      {
        label: "español",
        lang: "es",
        path: "/example.html#es",
      },
      {
        label: "čeština",
        lang: "cs",
        path: "/example.html#cs",
      },
      {
        label: "dansk",
        lang: "da",
        path: "/example.html#da",
      },
      {
        label: "Deutsch",
        lang: "de",
        path: "/example.html#de",
      },
      {
        label: "eesti",
        lang: "et",
        path: "/example.html#et",
      },
      {
        label: "ελληνικά",
        lang: "el",
        path: "/example.html#el",
      },
      {
        label: "English",
        active: true,
        lang: "en",
        path: "/example.html#en",
      },
      {
        label: "français",
        lang: "fr",
        path: "/example.html#fr",
      },
      {
        label: "Gaeilge",
        lang: "ga",
        path: "/example.html#ga",
      },
      {
        label: "hrvatski",
        lang: "hr",
        path: "/example.html#hr",
      },
      {
        label: "italiano",
        lang: "it",
        path: "/example.html#it",
      },
      {
        label: "latviešu",
        lang: "lv",
        path: "/example.html#lv",
      },
      {
        label: "lietuvių",
        lang: "lt",
        path: "/example.html#lt",
      },
      {
        label: "magyar",
        lang: "hu",
        path: "/example.html#hu",
      },
      {
        label: "Malti",
        lang: "mt",
        path: "/example.html#mt",
      },
      {
        label: "Nederlands",
        lang: "nl",
        path: "/example.html#nl",
      },
      {
        label: "polski",
        lang: "pl",
        path: "/example.html#pl",
      },
      {
        label: "português",
        lang: "pt",
        path: "/example.html#pt",
      },
      {
        label: "română",
        lang: "ro",
        path: "/example.html#ro",
      },
      {
        label: "slovenčina",
        lang: "sk",
        path: "/example.html#sk",
      },
      {
        label: "slovenščina",
        lang: "sl",
        path: "/example.html#sl",
      },
      {
        label: "suomi",
        lang: "fi",
        path: "/example.html#fi",
      },
      {
        label: "svenska",
        lang: "sv",
        path: "/example.html#sv",
      },
    ],
    non_eu_items: [
      {
        label: "中文",
        lang: "zh",
        path: "/example.html#zh",
      },
      {
        label: "Türk",
        lang: "tr",
        path: "/example.html#tr",
      },
      {
        label: "pусский",
        lang: "ru",
        path: "/example.html#ru",
      },
      {
        label: "Català",
        lang: "ca",
        path: "/example.html#ca",
      },
      {
        label: "عَرَبِيّ",
        lang: "ar",
      },
    ],
    eu_category: "EU official languages",
    non_eu_category: "Other languages",
  },
  breadcrumbs: {
    attributes: new drupalAttribute().addClass(["mt-3"]),
    links: [
      { label: "Home", path: "/example.html" },
      {
        label: "European Commission",
        path: "/example.html",
      },
      {
        label: "About the European Commission",
        path: "/example.html",
      },
      { label: "News" },
    ],
    icon_path: "/icons.svg",
  },
};

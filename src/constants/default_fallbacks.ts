const dummy_apt = {
  arabic: `بِرُوفِيدْ مِيْ ذَا فَالِيُوزْ`,
  pronunciation: `birūfid mī dhā fālyūz`,
  translation: `Provide me the Values`,
};

const generate_dummy_niyats = (n = 1) => {
  const times = new Array(n).fill(null);
  const niyats = times.map((_, i) => {
    return {
      title: `Niyat Card ${(i + 1).toString().padStart(2, "0")}`,
      apt: dummy_apt,
    };
  });

  return niyats;
};

export const default_fallbacks = {
  niyat_card: {
    title: "Niyat Card Title",
    apt: dummy_apt,
  },
  template_page: {
    heading: "Salah Page Heading",
    description: "Salah Page Description",
    niyats: generate_dummy_niyats(3),
  },
};

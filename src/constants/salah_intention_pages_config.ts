// export const salah_names = ["fajr", "zuhr", "asr", "maghrib", "isha"];
import { salah_intentions } from ".";

const {
  fajr: fajr_niyats,
  zuhr: zuhr_niyats,
  asr: asr_niyats,
  maghrib: maghrib_niyats,
  isha: isha_niyats,
} = salah_intentions;

export const salah_intention_pages_config = {
  fajr: {
    heading: "Fajr Salah Niyat",
    description: "4 rakaths (units) = 2 sunnath + 2 fard",
    niyats: fajr_niyats,
  },
  zuhr: {
    heading: "Zuhr Salah Niyat",
    description:
      "Zuhr Breakdown: 12 rakaths (units) = 4 sunnath + 4 fard + 2 sunnath + 2  nafl",
    niyats: zuhr_niyats,
  },
  asr: {
    heading: "Asr Salah Niyat",
    description: "Asr Breakdown: 8 rakaths (units) = 4 sunnath + 4 fard",
    niyats: asr_niyats,
  },
  maghrib: {
    heading: "Maghrib Salah Niyat",
    description:
      "Maghrib Breakdown: 7 rakaths (units) = 3 fard + 2 sunnath + 2 nafl",
    niyats: maghrib_niyats,
  },
  isha: {
    heading: "Isha Salah Niyat",
    description:
      "Isha Breakdown: 17 rakaths (units) = 4 sunnath + 4 fard + 2 sunnath + 2  nafl + 3 witr wajib + 2 witr nafl",
    niyats: isha_niyats,
  },
};

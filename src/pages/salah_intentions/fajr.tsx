// @ts-nocheck
import { default_fallbacks, salah_intention_pages_config } from "@/constants";
import SalahIntPgLayout from "@/layouts/salah_int_pg_layout";

export default function FajrPage() {
  const { fajr: fajrPageConfig } = salah_intention_pages_config;
  const final_value = fajrPageConfig || default_fallbacks.template_page;

  return <SalahIntPgLayout finalValue={final_value} />;
}

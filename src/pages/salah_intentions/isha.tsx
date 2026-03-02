// @ts-nocheck
import { default_fallbacks, salah_intention_pages_config } from "@/constants";
import SalahIntPgLayout from "@/layouts/salah_int_pg_layout";

const IshaPage = () => {
  const { isha: fajrPageConfig } = salah_intention_pages_config;
  const final_value = fajrPageConfig || default_fallbacks.template_page;

  return <SalahIntPgLayout finalValue={final_value} />;
};

export default IshaPage;

import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import { createClient } from "@/prismicio";

export default async function Button({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  const settings = await createClient().getSingle("settings");
  const { cta_background_color, cta_text_color } = settings.data;
  return (
    <PrismicNextLink
      className={clsx(
        "block w-full bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 ease-in-out py-4 md:py-6 px-8 md:px-12 font-display font-semibold text-lg md:text-2xl text-center text-white tracking-wide",
        className
      )}
      style={{
        color: cta_text_color || "rgb(250,204,21)",
        backgroundColor: cta_background_color || "rgb(234,179,8)",
      }}
      {...restProps}
    />
  );
}

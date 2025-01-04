import rss from "@astrojs/rss";
import { SITE } from "@/siteConfig";

export async function GET(context) {
  return rss({
    title: SITE.name,
    description: SITE.bio,
    site: context.site,
  });
}

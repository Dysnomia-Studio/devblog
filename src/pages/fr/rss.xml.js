import { getRSSByLang } from "/src/getRssByLang";
import { getLangFromUrl } from "/src/i18n-utils";

export async function GET(context) {
	return getRSSByLang(context, getLangFromUrl(context.url));
}

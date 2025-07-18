import { getRSSByLang } from "../getRssByLang";
import { getLangFromUrl } from "../i18n-utils";

export async function GET(context) {
	return getRSSByLang(context, getLangFromUrl(context.url));
}

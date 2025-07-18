import { getRSSByLang } from "../getRssByLang";

export async function GET(context) {
	return getRSSByLang(context, 'en');
}

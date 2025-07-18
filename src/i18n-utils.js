import { defaultLang, languageList } from './consts';

export function getLangFromUrl(url) {
	const [, lang, lang2] = url.pathname.split('/');
	if (languageList.includes(lang)) {
		return lang;
	}
	if (languageList.includes(lang2)) {
		return lang2;
	}
	return defaultLang;
}

export function useTranslatedPath(lang) {
	return function translatePath(path, l = lang) {
		if (!path.startsWith('/')) {
			path = '/' + path;
		}

		if (l === defaultLang) {
			return path;
		}

		return `/${l}${path}`;
	}
}

export function cleanPath(path) {
	if (path.startsWith('/')) {
		path = path.substring(1);
	}

	for (const language of languageList) {
		if (path.startsWith(language)) {
			path = path.substring(language.length);
			break;
		}
	}

	return path;
}

interface Flag {
    svg: string;
    png: string;
}

interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface Translation {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
}

interface RegionalBloc {
    acronym: string;
    name: string;
}

export interface Country {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    subregion: string;
    region: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    flags: Flag;
    currencies: Currency[];
    languages: Language[];
    translations: Translation;
    flag: string;
    regionalBlocs: RegionalBloc[];
    cioc: string;
    independent: boolean;
}


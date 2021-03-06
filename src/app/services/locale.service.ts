import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

/**
 * Updated by gulp script during a build of the app.
 */
const selectedLocale: string = 'fi';

/**
 * Updated by gulp script during a build of the app.
 */
const appName: string = 'Taivas TV7';

/**
 * Updated by gulp script during a build of the app.
 */
const appVersion: string = '2.2.5';

export const localeFi: string = 'fi';
export const localeEt: string = 'et';
export const localeRu: string = 'ru';
export const localeSv: string = 'sv';

const logoTaivas: string = 'assets/logo_taivas.png';
const logoTaevas: string = 'assets/logo_taevas.png';
const logoNebesa: string = 'assets/logo_nebesa.png';
const logoHimlen: string = 'assets/logo_himlen.png';

const categoryLogoTaivas: string = 'assets/category_logo_taivas.png';
const categoryLogoTaevas: string = 'assets/category_logo_taevas.png';
const categoryLogoNebesa: string = 'assets/category_logo_nebesa.png';
const categoryLogoHimlen: string = 'assets/category_logo_himlen.png';

const channelUrlFi: string = 'https://vod.tv7.fi:443/tv7-fi/_definst_/smil:tv7-fi.smil/playlist.m3u8';
const channelUrlEt: string = 'https://vod.tv7.fi:443/tv7-ee/_definst_/smil:tv7-ee.smil/playlist.m3u8';
const channelUrlRu: string = 'https://vod.tv7.fi:443/tv7-ru/_definst_/smil:tv7-ru.smil/playlist.m3u8';
const channelUrlSv: string = 'https://vod.tv7.fi:443/tv7-se/_definst_/smil:tv7-se.smil/playlist.m3u8';

const archiveUrlFi: string = 'https://www.tv7.fi/wp-json/tv7-api/v1/';
const archiveUrlEt: string = 'https://www.tv7.ee/wp-json/tv7-api/v1/';
const archiveUrlRu: string = 'https://www.nebesatv7.com/wp-json/tv7-api/v1/';
const archiveUrlSv: string = 'https://www.himlentv7.se/wp-json/tv7-api/v1/';

const archiveLanguageFi: string = 'FI1';
const archiveLanguageEt: string = 'ET1';
const archiveLanguageRu: string = 'RU1';
const archiveLanguageSv: string = 'SV1';

const keyboardLetters: any = {
  1: [
    { n: 'q', c: 'Q' },
    { n: 'w', c: 'W' },
    { n: 'e', c: 'E' },
    { n: 'r', c: 'R' },
    { n: 't', c: 'T' },
    { n: 'y', c: 'Y' },
    { n: 'u', c: 'U' },
    { n: 'i', c: 'I' },
    { n: 'o', c: 'O' },
    { n: 'p', c: 'P' },
    { n: '??', c: '??' }
  ],
  2: [
    { n: 'a', c: 'A' },
    { n: 's', c: 'S' },
    { n: 'd', c: 'D' },
    { n: 'f', c: 'F' },
    { n: 'g', c: 'G' },
    { n: 'h', c: 'H' },
    { n: 'j', c: 'J' },
    { n: 'k', c: 'K' },
    { n: 'l', c: 'L' },
    { n: '??', c: '??' },
    { n: '??', c: '??' }
  ],
  3: [
    { n: 'z', c: 'Z' },
    { n: 'x', c: 'X' },
    { n: 'c', c: 'C' },
    { n: 'v', c: 'V' },
    { n: 'b', c: 'B' },
    { n: 'n', c: 'N' },
    { n: 'm', c: 'M' }
  ],
};

const keyboardNumberSpecial: any = {
  1: [
    { n: '1' },
    { n: '2' },
    { n: '3' },
    { n: '4' },
    { n: '5' },
    { n: '6' },
    { n: '7' },
    { n: '8' },
    { n: '9' },
    { n: '0' },
    { n: ',' },
  ],
  2: [
    { n: '.' },
    { n: ';' },
    { n: ':' },
    { n: '!' },
    { n: '=' },
    { n: '/' },
    { n: '(' },
    { n: ')' },
    { n: '[' },
    { n: ']' },
    { n: '-' }
  ],
  3: [
    { n: '_' },
    { n: '*' },
    { n: '>' },
    { n: '<' },
    { n: '#' },
    { n: '?' },
    { n: '+' },
    { n: '&' },
  ]
};

const keyboardLettersEt: any = {
  1: [
    { n: 'q', c: 'Q' },
    { n: 'w', c: 'W' },
    { n: 'e', c: 'E' },
    { n: 'r', c: 'R' },
    { n: 't', c: 'T' },
    { n: 'y', c: 'Y' },
    { n: 'u', c: 'U' },
    { n: 'i', c: 'I' },
    { n: 'o', c: 'O' },
    { n: 'p', c: 'P' },
    { n: '??', c: '??' },
    { n: '??', c: '??' }
  ],
  2: [
    { n: 'a', c: 'A' },
    { n: 's', c: 'S' },
    { n: 'd', c: 'D' },
    { n: 'f', c: 'F' },
    { n: 'g', c: 'G' },
    { n: 'h', c: 'H' },
    { n: 'j', c: 'J' },
    { n: 'k', c: 'K' },
    { n: 'l', c: 'L' },
    { n: '??', c: '??' },
    { n: '??', c: '??' }
  ],
  3: [
    { n: 'z', c: 'Z' },
    { n: 'x', c: 'X' },
    { n: 'c', c: 'C' },
    { n: 'v', c: 'V' },
    { n: 'b', c: 'B' },
    { n: 'n', c: 'N' },
    { n: 'm', c: 'M' }
  ],
};

const keyboardNumberSpecialEt: any = {
  1: [
    { n: '1' },
    { n: '2' },
    { n: '3' },
    { n: '4' },
    { n: '5' },
    { n: '6' },
    { n: '7' },
    { n: '8' },
    { n: '9' },
    { n: '0' },
    { n: ',' },
  ],
  2: [
    { n: '.' },
    { n: ';' },
    { n: ':' },
    { n: '!' },
    { n: '=' },
    { n: '/' },
    { n: '(' },
    { n: ')' },
    { n: '[' },
    { n: ']' },
    { n: '-' }
  ],
  3: [
    { n: '_' },
    { n: '*' },
    { n: '>' },
    { n: '<' },
    { n: '#' },
    { n: '?' },
    { n: '+' },
    { n: '&' },
  ]
};

const keyboardLettersRu: any = {
  1: [
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
  ],
  2: [
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' }
  ],
  3: [
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' },
    { n: '??', c: '??' }
  ],
};

const keyboardNumberSpecialRu: any = {
  1: [
    { n: '1' },
    { n: '2' },
    { n: '3' },
    { n: '4' },
    { n: '5' },
    { n: '6' },
    { n: '7' },
    { n: '8' },
    { n: '9' },
    { n: '0' },
    { n: ',' },
  ],
  2: [
    { n: '.' },
    { n: ';' },
    { n: ':' },
    { n: '!' },
    { n: '=' },
    { n: '/' },
    { n: '(' },
    { n: ')' },
    { n: '[' },
    { n: ']' },
    { n: '-' }
  ],
  3: [
    { n: '_' },
    { n: '*' },
    { n: '>' },
    { n: '<' },
    { n: '#' },
    { n: '?' },
    { n: '+' },
    { n: '&' },
  ]
};

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  /*
  * UI texts and methods to update texts to the UI.
  */
  localeTextFi: Array<any> = [
    { id: 'toolbarText', text: 'Kun sis??lt?? ratkaisee' },
    { id: 'nextProgramsText', text: 'Tulossa kanavalta' },
    { id: 'dateElem', text: 'T??n????n' },
    { id: 'modalQuestionText', text: 'Sulje Taivas TV7 sovellus' },
    { id: 'exitYesButton', text: 'OK' },
    { id: 'exitCancelButton', text: 'Peruuta' },
    { id: 'comingProgramsText', text: 'Tulossa kanavalta' },
    { id: 'tvIconText', text: 'Netti-TV' },
    { id: 'archiveIconText', text: 'Arkisto' },
    { id: 'searchIconText', text: 'Haku' },
    { id: 'guideIconText', text: 'TV-opas' },
    { id: 'favoritesIconText', text: 'Suosikit' },
    { id: 'channelInfoIconText', text: 'Taivas TV7' },
    { id: 'platformInfoIconText', text: 'Tietoja' },
    { id: 'searchText', text: 'Hae' },
    { id: 'searchResultText', text: 'Haku tulokset' },
    { id: 'clearText', text: 'Tyhjenn??' },
    { id: 'recommendedProgramsText', text: 'Suosittelemme' },
    { id: 'mostViewedProgramsText', text: 'Katsotuimmat' },
    { id: 'newestProgramsText', text: 'Uusimmat' },
    { id: 'categoryText', text: 'Kategoria' },
    { id: 'categoriesText', text: 'Kategoriat' },
    { id: 'categoryBackText', text: 'Takaisin' },
    { id: 'episodeText', text: 'Jakso' },
    { id: 'seriesText', text: 'Sarja' },
    { id: 'durationText', text: 'Kesto' },
    { id: 'firstBroadcastText', text: 'Ensiesitys' },
    { id: 'favoritesText', text: 'Suosikit' },
    { id: 'noFavoritesText', text: 'Ei lis??ttyj?? suosikkeja' },
    { id: 'noHitsText', text: 'Ei hakuosumia' },
    { id: 'addedToFavoritesText', text: 'Lis??tty suosikkeihin' },
    { id: 'removedFromFavoritesText', text: 'Poistettu suosikeista' },
    { id: 'aspectRatioText', text: 'Kuvasuhde' },
    { id: 'copyrightText', text: 'Copyright Taivas TV7. Unauthorized publication of programs or subtitles is prohibited.' }
  ];

  localeTextEt: Array<any> = [
    { id: 'toolbarText', text: 'Kui sisu on oluline' },
    { id: 'nextProgramsText', text: 'Tulekul' },
    { id: 'dateElem', text: 'T??na' },
    { id: 'modalQuestionText', text: 'Sulge TV7 ??pp' },
    { id: 'exitYesButton', text: 'OK' },
    { id: 'exitCancelButton', text: 'T??hista' },
    { id: 'comingProgramsText', text: 'Tulekul' },
    { id: 'tvIconText', text: 'Neti-TV' },
    { id: 'archiveIconText', text: 'Arhiiv' },
    { id: 'searchIconText', text: 'Otsing' },
    { id: 'guideIconText', text: 'Saatekava' },
    { id: 'favoritesIconText', text: 'Lemmikud' },
    { id: 'channelInfoIconText', text: 'Taevas TV7' },
    { id: 'platformInfoIconText', text: 'Infot' },
    { id: 'searchText', text: 'Otsi' },
    { id: 'searchResultText', text: 'Otsingu tulemused' },
    { id: 'clearText', text: 'Kustuta' },
    { id: 'recommendedProgramsText', text: 'Vaata arhiivist' },
    { id: 'mostViewedProgramsText', text: 'Vaadatuimad' },
    { id: 'newestProgramsText', text: 'K??ige uuemad' },
    { id: 'categoryText', text: 'Kategooria' },
    { id: 'categoriesText', text: 'Kategooriad' },
    { id: 'categoryBackText', text: 'Tagasi' },
    { id: 'episodeText', text: 'Osa' },
    { id: 'seriesText', text: 'Saatesari' },
    { id: 'durationText', text: 'Kestus' },
    { id: 'firstBroadcastText', text: 'Esimene saade' },
    { id: 'favoritesText', text: 'Lemmikud' },
    { id: 'noFavoritesText', text: 'Lemmikuid pole lisatud' },
    { id: 'noHitsText', text: 'Otsingutulemusi pole' },
    { id: 'addedToFavoritesText', text: 'Lisatud lemmikutesse' },
    { id: 'removedFromFavoritesText', text: 'Lemmikutest eemaldatud' },
    { id: 'aspectRatioText', text: 'Kuvasuhe' },
    { id: 'copyrightText', text: 'Copyright Taevas TV7. Unauthorized publication of programs or subtitles is prohibited.' }
  ];

  localeTextRu: Array<any> = [
    { id: 'toolbarText', text: '?????????? ???????????????????? ?????????? ????????????????' },
    { id: 'nextProgramsText', text: '?????????? ???? ????????????????????' },
    { id: 'dateElem', text: '??????????????' },
    { id: 'modalQuestionText', text: '?????????????? ???????????????????? ????7' },
    { id: 'exitYesButton', text: 'OK' },
    { id: 'exitCancelButton', text: '????????????' },
    { id: 'comingProgramsText', text: '?????????? ???? ????????????????????' },
    { id: 'tvIconText', text: '??????-????' },
    { id: 'archiveIconText', text: '????????????????????' },
    { id: 'searchIconText', text: '??????????' },
    { id: 'guideIconText', text: '??????????????????????????' },
    { id: 'favoritesIconText', text: '??????????????????' },
    { id: 'channelInfoIconText', text: '???????????? ????7' },
    { id: 'platformInfoIconText', text: '????????????????????' },
    { id: 'searchText', text: '??????????' },
    { id: 'searchResultText', text: '???????????????????? ????????????' },
    { id: 'clearText', text: '????????????????' },
    { id: 'recommendedProgramsText', text: '??????????????????????????' },
    { id: 'mostViewedProgramsText', text: '?????????? ????????????????????' },
    { id: 'newestProgramsText', text: '??????????' },
    { id: 'categoryText', text: '??????????????????' },
    { id: 'categoriesText', text: '??????????????????' },
    { id: 'categoryBackText', text: '??????????????' },
    { id: 'episodeText', text: '????????????' },
    { id: 'seriesText', text: '??????????' },
    { id: 'durationText', text: '??????????????????????????????????' },
    { id: 'firstBroadcastText', text: '???????????? ????????????????????' },
    { id: 'favoritesText', text: '??????????????????' },
    { id: 'noFavoritesText', text: '???????????? ?????????????????? ????????' },
    { id: 'noHitsText', text: '???????????? ???? ??????????????' },
    { id: 'addedToFavoritesText', text: '?????????????????? ?? ??????????????????' },
    { id: 'removedFromFavoritesText', text: '?????????????? ???? ??????????????????' },
    { id: 'aspectRatioText', text: '?????????????????????? ????????????' },
    { id: 'copyrightText', text: 'Copyright ???????????? ????7. Unauthorized publication of programs or subtitles is prohibited.' }
  ];

  localeTextSv: Array<any> = [
    { id: 'toolbarText', text: 'N??r inneh??llet avg??r' },
    { id: 'nextProgramsText', text: 'Kommande program p?? kanalen' },
    { id: 'dateElem', text: 'I dag' },
    { id: 'modalQuestionText', text: 'St??ng Himlen TV7-appen' },
    { id: 'exitYesButton', text: 'OK' },
    { id: 'exitCancelButton', text: 'Avbryt' },
    { id: 'comingProgramsText', text: 'Kommande program p?? kanalen' },
    { id: 'tvIconText', text: 'TV-kanal' },
    { id: 'archiveIconText', text: 'Play-arkiv' },
    { id: 'searchIconText', text: 'S??k' },
    { id: 'guideIconText', text: 'Tabl??' },
    { id: 'favoritesIconText', text: 'Favoriter' },
    { id: 'channelInfoIconText', text: 'Himlen TV7' },
    { id: 'platformInfoIconText', text: 'Information' },
    { id: 'searchText', text: 'S??k' },
    { id: 'searchResultText', text: 'S??kresultat' },
    { id: 'clearText', text: 'Radera' },
    { id: 'recommendedProgramsText', text: 'Rekommenderat i arkivet' },
    { id: 'mostViewedProgramsText', text: 'Popul??rast just nu' },
    { id: 'newestProgramsText', text: 'Senaste' },
    { id: 'categoryText', text: 'Kategori' },
    { id: 'categoriesText', text: 'Kategorier' },
    { id: 'categoryBackText', text: 'Tillbaka' },
    { id: 'episodeText', text: 'Avsnitt' },
    { id: 'seriesText', text: 'Programserie' },
    { id: 'durationText', text: 'L??ngd' },
    { id: 'firstBroadcastText', text: 'F??rsta s??ndningen' },
    { id: 'favoritesText', text: 'Favoriter' },
    { id: 'noFavoritesText', text: 'Inga favoriter valda' },
    { id: 'noHitsText', text: 'Inga s??ktr??ffar' },
    { id: 'addedToFavoritesText', text: 'Tillagd bland favoriter' },
    { id: 'removedFromFavoritesText', text: 'Borttagen fr??n favoriter' },
    { id: 'aspectRatioText', text: 'Bildf??rh??llande' },
    { id: 'copyrightText', text: 'Copyright Himlen TV7. Unauthorized publication of programs or subtitles is prohibited.' }
  ];

  constructor(private commonService: CommonService) { }

  getLocaleTextById(id: string): string {
    const localeData: any = this.getLocaleData();

    const result = localeData.find(item => {
      return item.id === id
    });

    if (result) {
      return result.text;
    }
    else {
      return 'Text not found';
    }
  }

  getElementById(id: string): any {
    return this.commonService.getElementById(id);
  }

  setLocaleText(id: string): void {
    if (!id) {
      return;
    }

    const localeText = this.getLocaleTextById(id);
    if (!localeText) {
      return;
    }

    const elem = this.getElementById(id);
    if (!elem) {
      return;
    }

    elem.innerHTML = localeText;
  }

  getSelectedLocale(): string {
    return selectedLocale;
  }

  getArchiveLanguage(): string {
    let lang: string = '';
    if (selectedLocale === localeFi) {
      lang = archiveLanguageFi;
    }
    else if (selectedLocale === localeEt) {
      lang = archiveLanguageEt;
    }
    else if (selectedLocale === localeRu) {
      lang = archiveLanguageRu;
    }
    else if (selectedLocale === localeSv) {
      lang = archiveLanguageSv;
    }

    return lang;
  }

  getArchiveUrl(): string {
    let url: string = '';
    if (selectedLocale === localeFi) {
      url = archiveUrlFi;
    }
    else if (selectedLocale === localeEt) {
      url = archiveUrlEt;
    }
    else if (selectedLocale === localeRu) {
      url = archiveUrlRu;
    }
    else if (selectedLocale === localeSv) {
      url = archiveUrlSv;
    }

    return url;
  }

  getChannelUrl(): string {
    let url: string = '';
    if (selectedLocale == localeFi) {
      url = channelUrlFi;
    }
    else if (selectedLocale == localeEt) {
      url = channelUrlEt;
    }
    else if (selectedLocale == localeRu) {
      url = channelUrlRu;
    }
    else if (selectedLocale == localeSv) {
      url = channelUrlSv;
    }

    return url;
  }

  getCategoryLogo(): string {
    let logo: string = '';
    if (selectedLocale === localeFi) {
      logo = categoryLogoTaivas;
    }
    else if (selectedLocale === localeEt) {
      logo = categoryLogoTaevas;
    }
    else if (selectedLocale === localeRu) {
      logo = categoryLogoNebesa;
    }
    else if (selectedLocale === localeSv) {
      logo = categoryLogoHimlen;
    }

    return logo;
  }

  getChannelLogo(): string {
    let logo: string = '';
    if (selectedLocale === localeFi) {
      logo = logoTaivas;
    }
    else if (selectedLocale === localeEt) {
      logo = logoTaevas;
    }
    else if (selectedLocale === localeRu) {
      logo = logoNebesa;
    }
    else if (selectedLocale === localeSv) {
      logo = logoHimlen;
    }

    return logo;
  }

  getLocaleData(): any {
    let locale: any = null;
    if (selectedLocale === localeFi) {
      locale = this.localeTextFi;
    }
    else if (selectedLocale === localeEt) {
      locale = this.localeTextEt;
    }
    else if (selectedLocale === localeRu) {
      locale = this.localeTextRu;
    }
    else if (selectedLocale === localeSv) {
      locale = this.localeTextSv;
    }

    return locale;
  }

  getKeyboard(): any {
    let keyboard: any = null;
    if (selectedLocale === localeFi || selectedLocale === localeSv) {
      keyboard = { letter: keyboardLetters, special: keyboardNumberSpecial };
    }
    else if (selectedLocale === localeEt) {
      keyboard = { letter: keyboardLettersEt, special: keyboardNumberSpecialEt };
    }
    else if (selectedLocale === localeRu) {
      keyboard = { letter: keyboardLettersRu, special: keyboardNumberSpecialRu };
    }

    return keyboard;
  }

  getAppName(): string {
    return appName;
  }

  getAppVersion(): string {
    return appVersion;
  }
}

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [vue-i18n](./vue-i18n.md) &gt; [VueI18n](./vue-i18n.vuei18n.md)

## VueI18n type

VueI18n Interfaces

This type is compatible with interface of `VueI18n` class (offered with vue-i18n<!-- -->@<!-- -->8.x).

<b>Signature:</b>

```typescript
export declare type VueI18n = {
    locale: Locale;
    fallbackLocale: FallbackLocale;
    readonly availableLocales: Locale[];
    readonly messages: LocaleMessages;
    readonly datetimeFormats: DateTimeFormats;
    readonly numberFormats: NumberFormats;
    formatter: Formatter;
    missing: MissingHandler | null;
    postTranslation: PostTranslationHandler | null;
    silentTranslationWarn: boolean | RegExp;
    silentFallbackWarn: boolean | RegExp;
    formatFallbackMessages: boolean;
    sync: boolean;
    warnHtmlInMessage: WarnHtmlInMessageLevel;
    __id: number;
    __composer: Composer;
    t(key: Path): TranslateResult;
    t(key: Path, locale: Locale): TranslateResult;
    t(key: Path, locale: Locale, list: unknown[]): TranslateResult;
    t(key: Path, locale: Locale, named: object): TranslateResult;
    t(key: Path, list: unknown[]): TranslateResult;
    t(key: Path, named: object): TranslateResult;
    t(...args: unknown[]): TranslateResult;
    tc(key: Path): TranslateResult;
    tc(key: Path, locale: Locale): TranslateResult;
    tc(key: Path, list: unknown[]): TranslateResult;
    tc(key: Path, named: object): TranslateResult;
    tc(key: Path, choice: number): TranslateResult;
    tc(key: Path, choice: number, locale: Locale): TranslateResult;
    tc(key: Path, choice: number, list: unknown[]): TranslateResult;
    tc(key: Path, choice: number, named: object): TranslateResult;
    tc(...args: unknown[]): TranslateResult;
    te(key: Path, locale?: Locale): boolean;
    getLocaleMessage(locale: Locale): LocaleMessage;
    setLocaleMessage(locale: Locale, message: LocaleMessage): void;
    mergeLocaleMessage(locale: Locale, message: LocaleMessage): void;
    d(value: number | Date): DateTimeFormatResult;
    d(value: number | Date, key: string): DateTimeFormatResult;
    d(value: number | Date, key: string, locale: Locale): DateTimeFormatResult;
    d(value: number | Date, args: {
        [key: string]: string;
    }): DateTimeFormatResult;
    d(...args: unknown[]): DateTimeFormatResult;
    getDateTimeFormat(locale: Locale): DateTimeFormat;
    setDateTimeFormat(locale: Locale, format: DateTimeFormat): void;
    mergeDateTimeFormat(locale: Locale, format: DateTimeFormat): void;
    n(value: number): NumberFormatResult;
    n(value: number, key: string): NumberFormatResult;
    n(value: number, key: string, locale: Locale): NumberFormatResult;
    n(value: number, args: {
        [key: string]: string;
    }): NumberFormatResult;
    n(...args: unknown[]): NumberFormatResult;
    getNumberFormat(locale: Locale): NumberFormat;
    setNumberFormat(locale: Locale, format: NumberFormat): void;
    mergeNumberFormat(locale: Locale, format: NumberFormat): void;
    getChoiceIndex: (choice: Choice, choicesLength: number) => number;
    install: Plugin;
};
```
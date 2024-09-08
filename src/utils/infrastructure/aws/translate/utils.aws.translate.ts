import { Translate } from '@aws-sdk/client-translate';

export class AwsTranslate {

    static async translateText(text: string): Promise<string> {
        const params = {
            SourceLanguageCode: 'en',
            TargetLanguageCode: 'es',
            Text: text
        }
        
        const translate = new Translate();
        
        const TranslatedText = await translate.translateText(params).then((data) => {
            return data.TranslatedText;
        }).catch((error) => {
            console.error(error);
            throw new Error(`Error translating text: ${error}`);
        });

        return TranslatedText;
    }
    
}
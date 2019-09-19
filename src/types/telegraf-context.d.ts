import { I18n } from 'telegraf-i18n';
import { IProduct } from '../models/Product';
// import { ISearchResult } from '../util/movie-search';

declare module 'telegraf' {
  interface ContextMessageUpdate {
    i18n: I18n;
    scene: any;
    session: {
      movies: IProduct[];
      settingsScene: {
        messagesToDelete: any[];
      };
      language: 'en' | 'ru';
    };
    movie: any;
    webhookReply: boolean;
  }
}

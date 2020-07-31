import { AuthorDetail } from './author-detail.model';
import { PublisherDetail } from './publisher-detail.model';

export class BookDetail {
    BookId: number;
    Tittle: string;
    BookType: string;
    BookDescription: string;
    AuthId: number;
    PubId: number;
    BookStatus: string;
    Auth: AuthorDetail;
    Pub: PublisherDetail;
}

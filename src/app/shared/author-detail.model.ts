import {BookDetail} from './book-detail.model';

export class AuthorDetail {
    AuthorId: number;
    FirstName: string;
    LastName: string;
    HomeAddress: string;
    City: string;
    State: string;
    Country: string;
    Book?: [BookDetail];
}

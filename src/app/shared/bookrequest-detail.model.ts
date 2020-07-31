import {BookDetail} from './book-detail.model';
import {LibraryuserDetail} from './libraryuser-detail.model';


export class BookrequestDetail {
    RequestId: number;
    BookId: number;
    UserId: number;
    Rstatus: string;
    RequestToken: string;
    RequestTime: string;
    ProcessTime: string;
    BookReturnTime: string;
    Book: BookDetail;
    User: LibraryuserDetail;
}

import { Component, OnInit } from '@angular/core';
import { PublisherDetailService } from '../../shared/publisher-detail.service';

@Component({
  selector: 'app-publisher-detail-list',
  templateUrl: './publisher-detail-list.component.html',
  styles: [
  ]
})
export class PublisherDetailListComponent implements OnInit {

  constructor(public service: PublisherDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(publisherId) {
    if (confirm('Are you sure to delete this record ?')) {
      if(this.service.formData.PublisherId == publisherId)
      {
        this.service.formData = {
          PublisherId:0,
          PublisherName: '',
          City: '',
          State: '',
          Country: ''
        }
      }
      this.service.deletePublisherDetail(publisherId)
        .subscribe(res => {
          this.service.refreshList();
          
        },
        err => { console.log(err); })
    }
  }

}

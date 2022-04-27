import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { blogDetails } from '../../core/home/home.config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() public blogId;
  blogDetails = blogDetails;
  blog: any;

  constructor(public activeModal: NgbActiveModal) { 
  
  }

  ngOnInit(): void {
    this.blogDetails.map(blog => {
      if (blog.id === this.blogId) {
        this.blog = blog;
      }
    })
  }

}

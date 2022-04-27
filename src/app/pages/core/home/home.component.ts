import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../shared/modal/modal.component';
import { blogDetails } from '../../core/home/home.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogDetails = blogDetails;
  
  constructor(private modalService: NgbModal, public config: NgbCarouselConfig) { 
    config.interval = 5000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
  }

  ngOnInit(): void {
  }

  openModal(blogId) {
    console.log('blogId:'+blogId)
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.blogId = blogId;
  }

}

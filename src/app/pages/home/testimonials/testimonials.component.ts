import {Component} from '@angular/core';
import {REVIEWS_LIST} from '../../../utils/reviews-list';
import {Review} from 'src/app/models/review';

const REVIEW_TIMEOUT = 1;

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  public reviewsList: Review[] = REVIEWS_LIST;
  public slideNumber = 0;
  public show = true;

  public nextReview(): void {
    if (this.slideNumber < this.reviewsList.length - 1) {
      this.show = false;
      this.slideNumber++;
      setTimeout(() => this.show = true, REVIEW_TIMEOUT);
    }
  }

  public previousReview(): void {
    if (this.slideNumber > 0) {
      this.show = false;
      this.slideNumber--;
      setTimeout(() => this.show = true, REVIEW_TIMEOUT);
    }
  }

}

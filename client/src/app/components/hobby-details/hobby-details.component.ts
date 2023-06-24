import { Component, Input, OnInit } from '@angular/core';
import { HobbyService } from 'src/app/services/hobby.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hobby } from 'src/app/models/hobby.model';

@Component({
  selector: 'app-hobby-details',
  templateUrl: './hobby-details.component.html',
  styleUrls: ['./hobby-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentHobby: Hobby = {
    title: '',
    description: '',

  };

  message = '';

  constructor(
    private hobbyService: HobbyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getHobby(this.route.snapshot.params["id"]);
    }
  }

  getHobby(id: string): void {
    this.hobbyService.get(id)
      .subscribe({
        next: (data) => {
          this.currentHobby = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }



  updateHobby(): void {
    this.message = '';

    this.hobbyService.update(this.currentHobby.id, this.currentHobby)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Hobby was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteHobby(): void {
    this.hobbyService.delete(this.currentHobby.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }

}

import { Component } from '@angular/core';
import { Hobby } from 'src/app/models/hobby.model';
import { HobbyService } from 'src/app/services/hobby.service';

@Component({
  selector: 'app-add-hobby',
  templateUrl: './add-hobby.component.html',
  styleUrls: ['./add-hobby.component.css']
})
export class AddTutorialComponent {

  tutorial: Hobby = {
    title: '',
    description: '',

  };
  submitted = false;

  constructor(private hobbyService: HobbyService) { }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.hobbyService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',

    };
  }

}

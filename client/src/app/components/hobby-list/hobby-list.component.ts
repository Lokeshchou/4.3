import { Component, OnInit } from '@angular/core';
import { Hobby } from 'src/app/models/hobby.model';
import { HobbyService } from 'src/app/services/hobby.service';

@Component({
  selector: 'app-hobby-list',
  templateUrl: './hobby-list.component.html',
  styleUrls: ['./hobby-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials?: Hobby[];
  currentTutorial: Hobby = {};
  currentIndex = -1;
  title = '';

  constructor(private hobbyService: HobbyService) { }

  ngOnInit(): void {
    this.retrieveHobby();
  }

  retrieveHobby(): void {
    this.hobbyService.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveHobby();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }



  removeAllHobby(): void {
    this.hobbyService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.hobbyService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}

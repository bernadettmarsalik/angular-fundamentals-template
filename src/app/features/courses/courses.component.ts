import { Component, OnInit } from '@angular/core';
import { mockedCoursesList, mockedAuthorsList } from '../../shared/mocks/mocks'

type Course = {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
};

type Author = {
  id: string;
  name: string;
};
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})


export class CoursesComponent implements OnInit{
  courses: Course[] = [];
  authors: Author[] = mockedAuthorsList;

  ngOnInit(): void {
    this.courses = mockedCoursesList.map(course => ({
      ...course,
      authors: this.getAuthorsNames(course.authors)
    }));
  }

  getAuthorsNames(authorIds: string[]): string[] {
    return authorIds.map(id => {
      const author = this.authors.find(a => a.id === id);
      return author ? author.name : 'Unknown';
    });
  }
}


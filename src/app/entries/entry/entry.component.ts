import { Component, Input } from '@angular/core';
import { Entry } from '../shared/entry.model';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    @Input() entry: Entry;
    // title: string = 'My First Photo';
    // photo: string = 'http://placehold.it/800x500?text=Angular Basics';
    // description: string = 'A Description of My First Photo';
    // comments: any[] = [
    //     {name: "Jim Ron", comment: "A comment"},
    //     {name: "Jean Tribianni", comment: "A comment"},
    //     {name: "Jhon Dealer", comment: "A comment"}
    // ]
    onCommentAdded(comment: {name: string; comment: string;}) {
        this.entry.comments.push(comment);
    }
}
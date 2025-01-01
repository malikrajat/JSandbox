import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodeEditorComponent } from './code-editor/code-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CodeEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JSandbox';
}

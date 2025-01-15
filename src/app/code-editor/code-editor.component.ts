import {ChangeDetectorRef, Component, inject} from '@angular/core';
// import {NodeVM, VM} from 'vm2';
import {MonacoEditorModule} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css',
  imports: [MonacoEditorModule, FormsModule]
})
export class CodeEditorComponent {
  editorOptions = {
    theme: 'vs-dark',
    automaticLayout: true,
    readOnly: false,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    lineNumbers: 'off',
    language: 'javascript'
  };
  code: string = 'function x() {\nconsole.log("Hello world!");\n } \n x()';
  output: string = '';
  readonly cd = inject(ChangeDetectorRef);

  runCode() {
    try {

      // const func = new Function('return ' + this.code);
      // this.output = String(func());
      // console.log(this.output);



      let capturedOutput = '';

      // Override console.log to capture its output
      const originalConsoleLog = console.log;
      console.log = (message: any) => {
        capturedOutput += message + '\n';
      };

      // Execute the function
      const func = new Function(this.code);
      func();

      // Restore console.log
      console.log = originalConsoleLog;

      // Set the captured output to this.output
      this.output = capturedOutput.trim();
      this.cd.markForCheck();

    } catch (err: any) {
      this.output = err.toString();
      console.log(err.toString());
    }
  }

  onInit(editor: any) {
    let line = editor.getPosition();
    // console.log(line);
  }
}

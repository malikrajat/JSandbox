import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideMonacoEditor } from 'ngx-monaco-editor-v2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
      provideMonacoEditor({
      baseUrl: `monaco/vs`, // Matches the directory structure
      defaultOptions: {
        paths: {
          // vs: 'public/monaco/vs', // Ensure the 'vs' folder path matches the structure
          vs: `monaco/vs`,
        },
      },
    }),
  ]
};

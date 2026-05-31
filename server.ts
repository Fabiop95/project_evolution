import { APP_BASE_HREF } from '@angular/common';
import { AngularAppEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import {
  createNodeRequestHandler,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');

  const angularEngine = new AngularAppEngine();

  // Serve i file statici (immagini, css, js)
  server.get(
    '*.*',
    express.static(browserDistFolder, {
      maxAge: '1y',
    }),
  );

  // Gestione globale del Server-Side Rendering con Angular 20
  server.get(
    '*',
    createNodeRequestHandler(async (req: any, res, next) => {
      try {
        const rispostaWebStandard = await angularEngine.handle(req);

        if (rispostaWebStandard) {
          await writeResponseToNodeResponse(rispostaWebStandard, res);
          return;
        }

        next();
      } catch (errore) {
        next(errore);
      }
    }),
  );

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();

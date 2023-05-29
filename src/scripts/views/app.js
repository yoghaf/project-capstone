import React from 'react';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({
        content,
    }) {
        this.content = content;
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const Page = routes[url];
        this.content.render(
            <React.StrictMode>
              <Page />
            </React.StrictMode>
          );
    }
}

export default App;

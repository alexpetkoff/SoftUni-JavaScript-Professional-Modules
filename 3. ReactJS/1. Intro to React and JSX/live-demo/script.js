import './node_modules/react/umd/react.production.min.js';
import './node_modules/react-dom/umd/react-dom.production.min.js';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

const reactHeading = React.createElement(
    'h1',
    {
        className: 'react-heading'
    },
    'Welcome to my first React app.'
);

root.render(reactHeading);

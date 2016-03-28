// Routing allows for the creation of very fast single-page applications.

var React = require('react');
var ReactRouter = require('react-router'); // Package being provided to us from react-router.
var Router = ReactRouter.Router; // The actual router for the application.
var Route = ReactRouter.Route; // Routes are synonymous with website pages.

// The 'history' package deals with keeping your package consistent throughout all browser sessions.
var CreateHistory = require('history/lib/createHashHistory');

// By doing this, we can turn off the 'ugly' keys that are automatically generated on each page.
// It's only there for ancient browsers so the back/forward buttons trace page history correctly.
var History = new CreateHashHistory({
    queryKey: false
});

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = (
    <Router history={History}>
        <Route path="/" component={Base}>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </Route>
    </Router>

);

module.exports = Routes;

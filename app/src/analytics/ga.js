import ReactGA from 'react-ga'

ReactGA.initialize('UA-26235588-4');

ReactGA.trackPageview = function() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export default ReactGA;

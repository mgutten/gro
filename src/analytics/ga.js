import ReactGA from 'react-ga'

ReactGA.trackPageview = function() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export default ReactGA;

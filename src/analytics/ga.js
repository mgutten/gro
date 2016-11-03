import ReactGA from 'react-ga'

ReactGA.trackPageview = function() {
  ReactGA.set({ page: window.location.hash });
  ReactGA.pageview(window.location.hash);
};

export default ReactGA;

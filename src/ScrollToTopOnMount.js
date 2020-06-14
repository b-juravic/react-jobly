import { useEffect } from 'react';

/**
 * Used for components where scrolling back to top of page necessary.
 *
 * App -> Routes -> PrivateRoute -> [Companies, Company, Jobs, Home, Profile] -> ScrollToTop
 */
function ScrollToTopOnMount() {

  useEffect(function scroll() {
    window.scrollTo(0, 0);
  }, [/* scroll on mount */]);

  return null;
}

export default ScrollToTopOnMount;
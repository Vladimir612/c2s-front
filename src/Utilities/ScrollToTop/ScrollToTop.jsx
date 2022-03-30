import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useHistory();

    return <Component history={history} {...props} />;
  };

  return Wrapper;
};

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default withRouter(ScrollToTop);

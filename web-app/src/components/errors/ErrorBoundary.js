import React from "react";
import ErrorPage from "../../pages/errorPage";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };

    props.history &&
      props.history.listen((location, action) => {
        this.setState({ error: null, errorInfo: null });
      });
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

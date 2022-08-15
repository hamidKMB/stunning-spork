import React from "react";

export default class ErrorBoundries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong !</h1>;
    }
    return this.props.children;
  }
}

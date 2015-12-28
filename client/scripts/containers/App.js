import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ApplicationActions from '../actions/applicationActions';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContentBlocker from '../components/Content/ContentBlocker';


class App extends Component {
  getChildContext() {
    return { actions: this.props.actions };
  }

  render() {
    const { application, routing, children } = this.props;

    return (
      <div className="App">
        <Header {...application} {...routing} />
        {children}
        <Footer />
        <ContentBlocker isActive={application.mobileMenuShowing} />
      </div>
    );
  }
}

App.childContextTypes = {
  actions: PropTypes.object,
};

App.propTypes = {
  actions: PropTypes.object.isRequired,

  children: PropTypes.object,

  application: PropTypes.shape({
    mobileMenuShowing: PropTypes.bool.isRequired,
  }).isRequired,

  routing: PropTypes.shape({
    path: PropTypes.string,
  }),
};


const mapStateToProps = (state) => {
  return {
    application: state.application,
    routing: state.routing,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ApplicationActions, dispatch),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(App);

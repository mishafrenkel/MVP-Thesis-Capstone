import { connect } from 'react-redux';
import actions from 'store/app/actions';
import Navigation from './Nav';

const mapStateToProps = state => ({
  layout: state.app.layout,
  theme: state.app.theme,
});

const mapDispatchToProps = dispatch => ({
  setTheme: theme => dispatch(actions.setTheme({ theme })),
  setLayout: layout => dispatch(actions.setLayout({ layout })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);

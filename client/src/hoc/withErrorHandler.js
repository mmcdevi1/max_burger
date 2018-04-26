import React from 'react';
import Modal from '../components/UI/Modal/Modal';
import Aux from './Auxi';

export default function (WrappedComponent, axios) {
  class ErrorHandler extends React.Component {
    constructor (props) {
      super(props);

      this.state = {
        error: null,
      }
    }

    componentWillMount () {
      axios.interceptors.request.use(req => {
        this.setState({
          error: null
        })

        return req;
      })

      axios.interceptors.response.use(null, err => {
        this.setState({
          error: err,
        })
      })
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    render () {
      const { error } = this.state;

      return (
        <Aux>
          <Modal 
            show={this.state.error} 
            cancel={this.errorConfirmedHandler}
          >
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }

  return ErrorHandler;
}
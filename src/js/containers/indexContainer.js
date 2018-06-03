import { connect } from 'react-redux';
import Index from '../components/index.jsx';
import { getUserMsg } from '../reducers';

function mapProps(state) {
    return {
        userMsg:getUserMsg(state)
    }
}

export default connect(mapProps)(Index);
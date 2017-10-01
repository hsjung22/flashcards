import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveCard } from '../actions'
import NewCard from '../components/NewCard'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ receiveCard }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewCard)

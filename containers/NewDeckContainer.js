import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveDeck } from '../actions'
import NewDeck from '../components/NewDeck'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ receiveDeck }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewDeck)

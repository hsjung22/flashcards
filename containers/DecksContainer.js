import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveDecks } from '../actions'
import Decks from '../components/Decks'

function mapStateToProps(decks) {
  return { decks: decks }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ receiveDecks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)

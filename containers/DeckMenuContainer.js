import { connect } from 'react-redux'
import DeckMenu from '../components/DeckMenu'

function mapStateToProps(decks, props) {
  const { title } = props.navigation.state.params
  return { deck: decks[title] }
}

export default connect(mapStateToProps)(DeckMenu)

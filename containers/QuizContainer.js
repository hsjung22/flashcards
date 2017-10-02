import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { receiveCorrect, receiveIncorrect, resetScore } from '../actions'
import Quiz from '../components/Quiz'

function mapStateToProps({ score }) {
  return { score }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({
   receiveCorrect,
   receiveIncorrect,
   resetScore,
 }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)

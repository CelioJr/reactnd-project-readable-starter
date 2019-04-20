import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import logger from './loggers'

export default applyMiddleware(
    thunk,
    logger
)
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Main from './js/screens/main'
import SkeinOfHeart from './js/components/SkeinOfHeart'
import DiaryWrite from './js/screens/diaryWrite'
import DiaryList from './js/screens/diaryList'
import store from './store'
import { Provider } from 'react-redux'
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <SkeinOfHeart />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
// serviceWorker.unregister()

import React from 'react'
import { Provider } from 'react-redux'
import * as eva from '@eva-design/eva'
import { default as theme } from './theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { default as mapping } from './mapping.json'
import { PersistGate } from 'redux-persist/integration/react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'

import Routes from './src/navigations'
import { store, persistor } from './src/Redux/store'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...theme }}
        customMapping={mapping}>
        <Routes />
      </ApplicationProvider>
    </PersistGate>
  </Provider>
)
export default App

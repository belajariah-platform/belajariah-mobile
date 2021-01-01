import React from 'react'
import * as eva from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'

import Routes from './src/navigations'
import { default as theme } from './theme.json'
import { default as mapping } from './mapping.json'

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.light, ...theme }}
      customMapping={mapping}>
      <Routes />
    </ApplicationProvider>
  </>
)
export default App

import React from 'react'
import { bindActionCreators } from 'redux'
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'

import Container from './App/Container'
import Footer from './App/Footer'
import Header from './App/Header'



const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://core-graphql.dev.waldo.photos/pizza' }),
})


export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header />
          <Container />
          <Footer />
        </div>
      </ApolloProvider>
    )
  }
}

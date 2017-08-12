// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Segment, Divider, Container } from 'semantic-ui-react'

class Words extends Component {
  render() {
    const tokens = this.props.tokens.map(token => {
        return <code>{token} </code>;
    })
    return (
      <Container text>
        <Segment padded>
          {tokens}
          <Divider horizontal>
            <Button
              color='violet'
              content='Normalize'
              icon='wizard'
              labelPosition='left'
            />
          </Divider>
          {tokens}
        </Segment>
      </Container>
    )
  }
}

export default connect(state => {
    return { tokens: state.words.tokens }
}, {
})(Words);


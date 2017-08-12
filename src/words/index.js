// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Segment, Divider, Input, Message, Container } from 'semantic-ui-react'
import * as _ from 'lodash';

import type { State } from '../initialState';
import type { Token } from './initialState';
import { wordsInputUpdate, wordsFilterNormalize } from './actions';

class WordBox extends Component {
  props: {
    tokens: Array<Token>;
    normalize: boolean;
    errorMessage: string;
    loading: boolean;
    inputTextChanged: (string) => void;
    toggleNormalize: () => void;
  }

  debouncedInputTextChanged = _.debounce(this.props.inputTextChanged, 500, {leading: false, trailing: true})

  render () {
    const toggleButton = (
      <Button
        color={this.props.normalize ? 'grey' : 'violet'}
        content={this.props.normalize ? 'Reveal' : 'Normalize'}
        icon='wizard'
        labelPosition='left'
        onClick={(param, data) => this.props.toggleNormalize()}
      />
    )

    const words = this.props.tokens.map((token, i) => {
      const word = (this.props.normalize) ? token.normal : token.raw;
      return (
        <div
          key={i}
          style={{
            display: 'inline-block',
            fontFamily: 'monospace',
            width: `${token.visualLength}ch`,
            marginRight: `1ch`,
            textAlign: 'center',
            fontWeight: (token.normal === token.raw) ? 'normal' : 'bold'
          }}
        >
          {word}
        </div>
      );
    });

    const errorBox = (this.props.errorMessage) ? (
      <Message negative>
        <Message.Header>We had troubling processing your input</Message.Header>
        <p>Your last successful output is below. The server said: <b>{this.props.errorMessage}</b></p>
      </Message>
    ) : null;

    return (
      <Segment vertical padded>
        <Container text textAlign='center'>
          <Input
            fluid
            placeholder='He said to her...'
            loading={this.props.loading}
            onChange={(param, data) => this.debouncedInputTextChanged(data.value)}
          />
          <Divider horizontal />
          {toggleButton}
          {errorBox}
          <Divider horizontal />
            <div style={{display: 'flex', flexFlow: 'row wrap'}}>
              {words}
            </div>
        </Container>
      </Segment>
    )
  }
}

export default connect(({words}: State) => {
    return {
      tokens: words.tokens,
      normalize: words.normalize,
      errorMessage: words.errorMessage,
      loading: words.thinking
    }
}, {
  inputTextChanged: wordsInputUpdate,
  toggleNormalize: wordsFilterNormalize
})(WordBox);


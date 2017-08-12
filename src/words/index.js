// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Button, Segment, Divider, Input, Message, Container, Checkbox } from 'semantic-ui-react'

import type { State } from '../initialState';
import type { Token } from './initialState';
import { wordsInputUpdate, wordsFilterNormalize } from './actions';

interface IProps {
  tokens: Array<Token>;
  normalize: boolean;
  errorMessage: string;
  inputTextChanged: (string) => void;
  toggleNormalize: () => void;
}

const WordBox = (props: IProps) => {
  const words = props.tokens.map((token, i) => {
    const word = (props.normalize) ? token.normal : token.raw;
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
  const errorBox = (props.errorMessage) ? (
    <Message negative>
      <Message.Header>We had troubling processing your input</Message.Header>
      <p>Your last successful output is below. The server said: <b>{props.errorMessage}</b></p>
    </Message>
  ) : null;
  return (
    <Segment vertical padded>
      <Container text textAlign='center'>
        <Input fluid placeholder='He said to her...' onChange={(param, data) => props.inputTextChanged(data.value)}/>
        <Divider horizontal />
        <Button
          color={props.normalize ? 'grey' : 'violet'}
          content={props.normalize ? 'Reveal' : 'Normalize'}
          icon='wizard'
          labelPosition='left'
          onClick={(param, data) => props.toggleNormalize()}
        />
        {errorBox}
        <Divider horizontal />
          <div style={{display: 'flex', flexFlow: 'row wrap'}}>
            {words}
          </div>
      </Container>
    </Segment>
  )
}

export default connect(({words}: State) => {
    return {
      tokens: words.tokens,
      normalize: words.normalize,
      errorMessage: words.errorMessage
    }
}, {
  inputTextChanged: wordsInputUpdate,
  toggleNormalize: wordsFilterNormalize
})(WordBox);


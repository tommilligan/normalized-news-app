// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Button, Segment, Divider, Container, Input, Message } from 'semantic-ui-react'

import type { Words, Token } from './initialState';
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
    return <code key={i}>{word} </code>;
  });
  const errorBox = (props.errorMessage) ? (
    <Message negative>
      <Message.Header>We had troubling processing your input</Message.Header>
      <p>Your last successful output is below. The server said: <b>{props.errorMessage}</b></p>
    </Message>
  ) : null;
  return (
    <Container text>
      <Segment padded>
        <Input fluid placeholder='He said to her...' onChange={(param, data) => props.inputTextChanged(data.value)}/>
        <Divider horizontal />
        <Button
          color={props.normalize ? 'grey' : 'violet'}
          content='Normalize'
          icon='wizard'
          labelPosition='left'
          onClick={(param, data) => props.toggleNormalize()}
        />
        {errorBox}
        <Divider horizontal />
        {words}
      </Segment>
    </Container>
  )
}

export default connect(({words}: Words) => {
    return {
      tokens: words.tokens,
      normalize: words.normalize,
      errorMessage: words.errorMessage
    }
}, {
  inputTextChanged: wordsInputUpdate,
  toggleNormalize: wordsFilterNormalize
})(WordBox);


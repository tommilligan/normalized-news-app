// @flow

export type Token = {
  +raw: string,
  +normal: string,
  +visualLength: number
}

export type Words = {
  +raw: string,
  +thinking: boolean,
  +errorMessage: string,
  +tokens: Array<Token>,
  +normalize: boolean
}

const words: Words = {
    raw: '',
    thinking: false,
    errorMessage: '',
    tokens: [],
    normalize: true
}
export default words;
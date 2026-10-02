import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const gray1 = '#383737';
export const gray2 = '#5c5a5a';
export const gray3 = '#857c81';
export const gray4 = '#b9b9b9';
export const gray5 = '#e3e2e2';
export const gray6 = '#f7f8fa';
export const primary1 = '#0e6042';
export const primary2 = '#147d57';
export const accent1 = '#c5d978';
export const accent2 = '#e5f0a8';
export const fontFamily = "'Segoe UI', 'Helvetica Neue',sans-serif";
export const fontSize = '16px';

export const PrimaryButton = styled.button`
min-height: 44px;
padding: 0 18px;
background-color: ${primary2};
border: 1px solid ${primary2};
border-radius: 8px;
font-family: ${fontFamily};
font-size: 14px;
font-weight: 700;
color: white;
cursor: pointer;
:hover:not(:disabled) {background-color: ${primary1}; transform: translateY(-1px); box-shadow: 0 7px 16px rgba(20, 80, 55, 0.18);}
:focus-visible {outline: 3px solid rgba(20, 125, 87, 0.28); outline-offset: 2px;}
:disabled {opacity: 0.55; cursor: not-allowed;}
`;

export const Fieldset = styled.fieldset`
box-sizing: border-box;
width: 100%;
margin: 0;
padding: 0;
border: 0;
`;

export const FieldContainer = styled.div`
margin-bottom: 18px;
`;

export const FieldLabel = styled.label`
display: block;
margin-bottom: 7px;
color: ${gray1};
font-size: 13px;
font-weight: 750;
`;

const baseFieldCSS = css`
  box-sizing: border-box;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  margin-bottom: 0;
  padding: 11px 13px;
  border: 1px solid #cfdad2;
  border-radius: 7px;
  color: ${gray2};
  background-color: #fbfcfa;
  width: 100%;
  transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease;
  :focus {
    border-color: ${primary2};
    outline: none;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(20, 125, 87, 0.12);
  }
  :disabled {
    background-color: #f1f4f0;
  }
`;

export const FieldInput = styled.input`
${baseFieldCSS}
`;

export const FieldTextArea = styled.textarea`
${baseFieldCSS}
min-height: 150px;
resize: vertical;
`;

export const FieldError = styled.div`
margin-top: 5px;
font-size: 12px;
color: #b33a3a;
`;

export const FormButtonContainer = styled.div`
margin: 8px 0 0;
padding: 18px 0 0;
border-top: 1px solid ${gray5};
`;

export const SubmissionSuccess = styled.div`
margin-top: 13px;
color: #0e6042;
font-size: 14px;
font-weight: 650;
`;

export const SubmissionFailure = styled.div`
margin-top: 10px;
color: #b33a3a;
`;

// Important Note
// A tagged template literal is a template literal to be parsed with a function.
// The template literal is contained in backticks (``) and the parsing function is
// placed immediately before it. More information can be found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals.
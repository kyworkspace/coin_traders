import React from "react";
import { storiesOf } from "@storybook/react";
import InlineList from "../ui/InlineList";
import { css } from "../ui/withStyles";

function RedBox({ children }) {
  return (
    <div
      {...css({
        backgroundColor: "red",
        padding: 30,
        height: 100,
      })}
    >
      {children}
    </div>
  );
}

storiesOf("UI/InlineList", module)
  .addWithJSX("기본설정", () => (
    <InlineList>
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .addWithJSX("align=center", () => (
    <InlineList align="center">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .addWithJSX("align=right", () => (
    <InlineList align="right">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .addWithJSX("verticalAlign=top", () => (
    <InlineList align="top">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .addWithJSX("verticalAlign=bottom", () => (
    <InlineList align="bottom">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ));

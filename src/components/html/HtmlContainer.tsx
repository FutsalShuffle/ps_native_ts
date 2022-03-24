import React from 'react';
import HTML from "react-native-render-html";
import { useWindowDimensions } from 'react-native';

interface HTMLProps {
    html: string;
    classesStyles?: any;
}

const HtmlContainer = (props:HTMLProps) => {
  const contentWidth = useWindowDimensions().width;
  return (
    <HTML
      source={{ html: props.html }}
      contentWidth={contentWidth}
      classesStyles={props.classesStyles ? props.classesStyles : null}
    />
  );
};


export default HtmlContainer;
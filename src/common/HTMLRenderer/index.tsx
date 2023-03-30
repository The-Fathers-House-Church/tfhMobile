import { useWindowDimensions } from 'react-native';
import RenderHtml, { MixedStyleDeclaration } from 'react-native-render-html';
import React from 'react';

const HTMLRenderer = ({
  html,
  style,
}: {
  html: string;
  style: MixedStyleDeclaration;
}) => {
  const { width } = useWindowDimensions();

  return (
    <RenderHtml
      contentWidth={width}
      source={{ html }}
      baseStyle={style}
      enableExperimentalGhostLinesPrevention={true}
      enableExperimentalBRCollapsing={true}
      enableExperimentalMarginCollapsing={true}
    />
  );
};

export default HTMLRenderer;

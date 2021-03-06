import { renderToStaticMarkup } from 'react-dom/server';
import createCanvas from './createCanvas';
import loadImage from './loadImage';

export default async function renderToCanvas(content, { width, height }) {
  const canvas = createCanvas(width, height, true);
  const ctx = canvas.getContext('2d');
  const url = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <style type="text/css">
        <![CDATA[
          ${document.getElementById('styles').innerHTML}
        ]]>
      </style>
      <foreignObject width="${width}" height="${height}">
      ${renderToStaticMarkup(content)}
      </foreignObject>
      </svg>`;
  const image = await loadImage(url);
  ctx.drawImage(image, 0, 0);
  return canvas;
}

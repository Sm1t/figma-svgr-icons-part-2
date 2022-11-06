const { types } = require('@babel/core');

module.exports = {
  outDir: 'icons',
  replaceAttrValues: {
    '#323232': 'currentColor',
  },
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      'removeXMLNS',
    ],
  },
  template: function svgrCustomTemplate(
    { imports, interfaces, componentName, props, jsx, exports },
    { tpl }
  ) {
    // меняем корневой элемент на SvgIcon
    jsx.openingElement.name.name = 'SvgIcon';
    jsx.closingElement.name.name = 'SvgIcon';

    // https://github.com/gregberge/svgr/issues/530
    // при изменении корневого элемента пропадает спред пропсов
    // поэтому необходимо добавить спред пропсов самостоятельно
    jsx.openingElement.attributes.push(
      types.jSXSpreadAttribute(types.identifier('props'))
    );

    return tpl`
  ${imports};
  import { SvgIcon } from '../SvgIcon';
  
  ${interfaces};
  
  const ${componentName} = (${props}) => (
    ${jsx}
  );
   
  ${exports};
  `
  }
}
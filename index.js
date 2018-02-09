let HtmlWebpackStringReplacePlugin = module.exports = function (replacements) {
  this.replacementsMap = replacements;
};

HtmlWebpackStringReplacePlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', this.done.bind(this));
};

HtmlWebpackStringReplacePlugin.prototype.done = function (compilation) {
  compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
    Object.keys(this.replacementsMap).forEach((key) => {
      let value = this.replacementsMap[key];
      htmlPluginData.html = htmlPluginData.html
        .replace(new RegExp(key, 'g'), value);
    });
    callback(null, htmlPluginData);
  });

};

'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });

    this.log('You called the Reactstarterkit subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('comp.js'),
      this.destinationPath('components/' + this.name + '/' + this.name + '.js'),
      { comp: this.name }
    );
    this.fs.copyTpl(
      this.templatePath('comp.less'),
      this.destinationPath('components/' + this.name + '/' + this.name + '.less'),
      { comp: this.name }
    );
    this.fs.copyTpl(
      this.templatePath('comp.json'),
      this.destinationPath('components/' + this.name + '/package.json'),
      { comp: this.name }
    );
  }
});

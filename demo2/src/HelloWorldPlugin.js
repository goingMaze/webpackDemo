class HelloWorldPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(complier) {
    complier.hooks.done.tap('HelloWorldPlugin', () => {
      console.log('Hello World!');
      console.log(this.options);
    })
  }
}

module.exports = HelloWorldPlugin;

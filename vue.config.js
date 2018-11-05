module.exports = {
  css: {
    loaderOptions: {
      sass:
        {
          data: `
            @import '~@/styles/_globals.scss';
            @import '~@/styles/_typography.scss';
          `,
        },
    },
  },
};

module.exports = {
  route: '',
  method: 'GET', // or 'get', or undefined === 'get'
  docs: [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur iusto quod unde, cum sint voluptatem aspernatur dignissimos iure dolorem voluptas quas eaque quis dolor quae ratione atque. Odio, quisquam.',
    '...',
  ],
  bin: {
    // can you have ungrouped endpoints? might be useful to create bin commands for datbase shit.
    getE:
  },
  // cron: '* * * * 40',
  cron: () => '* * * * 40',
  test() {

  },
  main() {

  },
  http() {

  }
};

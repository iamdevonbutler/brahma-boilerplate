module.exports = {
  route: '',
  method: 'GET', // or 'get', or undefined === 'get'
  docs: [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur iusto quod unde, cum sint voluptatem aspernatur dignissimos iure dolorem voluptas quas eaque quis dolor quae ratione atque. Odio, quisquam.',
    '...',
  ],
  bin({$main}) {
    return $main.call(null);
  },
  cron: '* * * * 40',
  main({env}) {
    env.get('key');
  },
  http() {

  }
};

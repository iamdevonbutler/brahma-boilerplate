// @document we can make this more inteligetn by passing in data and dynamically ordering routes
// based on that data..I just need a use case. Actually no need, this can be acomplished
// andother way - you can have a single endpoint that delegates dynamically to other endpoitns.
module.exports = () => ([
  [
    'ygl.getData',
    'ygl.getAllData',
    '...'
  ],
]);

// @todo route specificity system

//
// @todo got to ensure people dont write duplicate routes....e.g.
// /:user/:get
// /:dog/:cat
//
// but...
// /user/dog has preference over /:user/:dog
//
// @document i think wildcards are an antipattern here, if u use "/:varname" it acts just like
// a wildcard but allows u to set it in memory and do shit w/ it

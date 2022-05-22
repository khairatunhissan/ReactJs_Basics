#Exercise-1

forEach এবং map মধ্যে পার্থক্য কি?

#Exercise-2

এদের মধ্যে কোনটি polyfilled এবং কেন?
1.Arrow functions
2.Async functions
3.Promise
4.Destructuring
5.Array#findIndex
6..Classes
7.Array.from

#Exercise-3

এদের মধ্যে কোনগুলো compiled করা হয়েছে এবং কেন?
1.constants
2.default parameters
3.map
4.function bind
5.indexOf
6.fill
7.some
8.every
9.reduce
10.spread
11.filter

#Exercise-4

compiling এবং polifilling এর মধ্যে প্রধান পার্থক্য

#Exercise-5

কোন কোন অংশ compile এবং polyfilled করা হয়েছে?
const getProfile = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then(({ data }) => ({
      name: data.name,
      location: data.location,
      company: data.company,
      blog: data.blog.includes('https') ? data.blog : null
    }))
    .catch((e) => console.warn(e))
}


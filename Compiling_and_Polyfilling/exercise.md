# Exercise-1
forEach এবং map মধ্যে পার্থক্য কি?

# Exercise-2
এদের মধ্যে কোনটি polyfilled এবং কেন?
* Arrow functions
* Async functions
* Promise
* Destructuring
* Array#findIndex
* Classes
* Array.from

# Exercise-3
এদের মধ্যে কোনগুলো compiled করা হয়েছে এবং কেন?
* constants
* default parameters
* map
* function bind
* indexOf
* fill
* some
* every
* reduce
* spread
* filter

# Exercise-4
compiling এবং polifilling এর মধ্যে প্রধান পার্থক্য

# Exercise-5
কোন কোন অংশ compile এবং polyfilled করা হয়েছে?

```javascript
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

```
const random_jokes = [
  {
    title: 'What is the object oriented way to get wealthy ?',
    body: 'Inheritance',
  },
  {
    title: 'To understand what recursion is...',
    body: 'You must first understand what recursion is',
  },
  {
    title: 'What do you call a factory that sells passable products?',
    body: 'A satisfactory',
  },
]

let random_joke_call_count = 0

// 简易版
// export default {
//   'get /dev/random_joke': {
//     title: 'What is the object oriented way to get wealthy ?',
//     body: 'Inheritance',
//   },
// }

// 模拟出错
// export default {
//   'get /dev/random_joke': function(req, res) {
//     res.status(500)
//     res.json({})
//   },
// }

export default {
  'get /dev/random_joke': function(req, res) {
    const responseObj = random_jokes[random_joke_call_count % random_jokes.length]
    random_joke_call_count += 1
    setTimeout(() => {
      res.json(responseObj)
    }, 1000)
  },
}

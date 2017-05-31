import { expect } from 'chai'
import whereJson from '../src/whereJson'

describe('5. Where in the Json?', function() {

    const object = {
      "name": "William Shakespeare",
      "dead" : true,
      "works" : [
          {
              "name" : "Romeo and Juliet",
              "published" : 1591,
              "isAwesome" : true
          },
          {
              "name" : "Richard III",
              "published" : 1592,
              "isAwesome" : false
          }
      ],
      "favoriteSites" : [
          "tumblr",
          "4chan"
      ]
  }

  it('should be a function', function() {
    expect(whereJson).to.be.a('function')
  })

  it('responds with the search path for the string', function() {
    let stringSearch = "tumblr"
    expect(whereJson(object, stringSearch)).to.deep.equal("favoriteSites -> 0")
  })

  it('responds with the search path for the string', function() {
    let stringSearch = "Richard III"
    expect(whereJson(object, stringSearch)).to.deep.equal("works -> 1 -> name")
  })
})

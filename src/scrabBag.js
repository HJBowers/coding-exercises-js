export default function scrabBag(playedTiles) {
  const bag = [
    {
      letter: "E",
      number: 12
    },
    {
      letter: 'A',
      number: 9
    },
    {
      letter: 'I',
      number: 9
    },
    {
      letter: 'O',
      number: 8
    },
    {
      letter: 'N',
      number: 6
    },
    {
      letter: 'R',
      number: 6
    },
    {
      letter: 'T',
      number: 6
    },
    {
      letter: 'L',
      number: 4
    },
    {
      letter: 'S',
      number: 4
    },
    {
      letter: 'U',
      number: 4
    },
    {
      letter: 'D',
      number: 4
    },
    {
      letter: 'G',
      number: 3
    },
    {
      letter: '_',
      number: 2
    },
    {
      letter: 'B',
      number: 2
    },
    {
      letter: 'C',
      number: 2
    },
    {
      letter: 'M',
      number: 2
    },
    {
      letter: 'P',
      number: 2
    },
    {
      letter: 'F',
      number: 2
    },
    {
      letter: 'H',
      number: 2
    },
    {
      letter: 'V',
      number: 2
    },
    {
      letter: 'W',
      number: 2
    },
    {
      letter: 'Y',
      number: 2
    },
    {
      letter: 'K',
      number: 1
    },
    {
      letter: 'J',
      number: 1
    },
    {
      letter: 'X',
      number: 1
    },
    {
      letter: 'Q',
      number: 1
    },
    {
      letter: 'Z',
      number: 1
    }
  ]

  let remainingTiles = ""
  let answer = []
  let remainingTilesArr = [ [], [], [], [], [], [], [], [], [], [], [] ]
  const playedTilesArr = playedTiles.split("")

  playedTilesArr.forEach(function(playedTile) {
    for (var i = 0; i < bag.length; i++) {
      if (playedTile === bag[i].letter) {
        bag[i].number = bag[i].number -1
      }
    }
  })

  for (var i = 0; i < remainingTilesArr.length; i++) {
    for (var j = 0; j < bag.length; j++) {
      if (i === bag[j].number) {
        remainingTilesArr[i].push(bag[j].letter)
      }
    }
    remainingTiles = (`${[i]}` + ": " + remainingTilesArr[i].join())
    answer.push(remainingTiles)
  }
  return answer = answer.reverse().join('\n')
}

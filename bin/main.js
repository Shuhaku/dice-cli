#!/usr/bin/env node
const readline = require('readline')

function updateLine(text) {
  process.stdout.clearLine(0)
  process.stdout.cursorTo(0)
  process.stdout.write(text)
}

// Pachinko animation function
function pachinkoSpin(options) {
  let count = 0
  let maxTurns = 100 // The number of spins before final selection
  let speed = 25 // Constant speed for animation
  let finalChoice = options[Math.floor(Math.random() * options.length)]

  const interval = setInterval(() => {
    let randomPick = options[Math.floor(Math.random() * options.length)]
    updateLine(`🎰 ${randomPick} 🎰`) // Display changing options
    count++

    if (count >= maxTurns) {
      clearInterval(interval)
      setTimeout(() => {
        updateLine(`🎉 Final choice: \x1b[1;32m${finalChoice}\x1b[0m 🎉\n`)
      }, 50)
    }
  }, speed)
}

const args = process.argv.slice(2)
if (args.length < 2 || args.length > 255) {
  console.error('❌ You must provide between 2 and 255 options!')
  console.error('Usage: dice option1 option2 option3 ...')
  process.exit(1)
}

console.log('🎲 Starting the pachinko game! 🎲')
pachinkoSpin(args)

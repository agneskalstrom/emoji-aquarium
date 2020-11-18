const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const w = canvas.width
const h = canvas.height

const fish = ['🐟', '🐬', '🐡', '🐙', '🐠', '🐳', '🦀', '🦐', '🦈', '🦑', '🦞']

const button = document.getElementById('button')

function addFish(e) {
  aquarium.add(new Fish(e))
}

let self

class Aquarium {
  constructor() {
    this.fish = []
    self = this
  }

  add(fish) {
    console.log('added a new fish')
    this.fish = this.fish.concat(fish)
  }

  update() {
    ctx.clearRect(0, 0, w, h)
    if (self.fish) {
      for (let fish of self.fish) {
        fish.update()
        fish.draw()
      }
    }

    requestAnimationFrame(self.update)
  }
}

class Fish {
  constructor(e) {
    this.size = 100 // do random sizing here
    this.speed = 1 // add your math random speed thing here
    this.pos = { x: e.clientX, y: e.clientY }
    this.reverse = true
    this.type = fish[Math.floor(Math.random() * fish.length)]
  }

  update() {
    if (this.pos.x > w + this.size / 2 || this.pos.x < this.size / 2) {
      // figure out the exact pos yourself
      this.reverse = !this.reverse
      this.speed *= -1
    }
    this.pos.x += this.speed
  }

  draw() {
    ctx.font = '' + this.size + 'px sans-serif'
    if (this.reverse) {
      ctx.save()
      ctx.scale(-1, 1)
      ctx.fillText(this.type, -this.pos.x, this.pos.y)
      ctx.restore()
    } else {
      ctx.fillText(this.type, this.pos.x, this.pos.y)
    }
  }
}

const aquarium = new Aquarium()
aquarium.update()
button.addEventListener('click', addFish)

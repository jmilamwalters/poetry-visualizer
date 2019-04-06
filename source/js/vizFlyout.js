/*******************************************************************************
 * bars flying from center
 */
function VizFlyout(variant) {
  this.dampen = false
  this.hasVariants = true
  this.variants = [[2], [3]]

  this.vary(variant)
  this.distances = []
  for (var i = 0; i < bandCount; i++) {
    this.distances.push(0)
  }
}

VizFlyout.prototype.vary = function(variant) {
  this.variant = variant
  this.bars = this.variants[variant][0]
}

VizFlyout.prototype.resize = function() {
  this.maxDistance = longestSide * 0.71
  this.offset = this.maxDistance / this.bars
}

VizFlyout.prototype.draw = function(spectrum) {
  ctx.save()
  ctx.clearRect(0, 0, cv.width, cv.height)
  ctx.translate(cv.width / 2, cv.height / 2)
  ctx.rotate(allRotate)
  for (var i = 0; i < bandCount; i++) {
    ctx.rotate(rotateAmount)
    ctx.lineWidth = 1 + (spectrum[i] / 256) * 5
    var hue = ((360.0 / bandCount) * i) / 360.0
    // var hue = 0.75
    // console.log('hue', hue)
    var brightness = constrain((spectrum[i] * 1.0) / 150, 0.3, 1)
    ctx.strokeStyle = HSVtoRGB(hue, 1, brightness)

    this.distances[i] += (Math.max(50, spectrum[i]) * heightMultiplier) / 40
    this.distances[i] %= this.offset
    for (var j = 0; j < this.bars; j++) {
      this.arc(this.distances[i] + j * this.offset, rotateAmount * 0.75)
    }
  }
  allRotate += 0.002
  ctx.restore()
}

VizFlyout.prototype.arc = function(distance, angle) {
  ctx.beginPath()
  ctx.arc(0, 0, distance, 0, angle)
  ctx.stroke()
  ctx.closePath()
  ctx.fillStyle = ctx.strokeStyle
  // ctx.fillRect(distance, distance, 12, 12)
  const fontSize = 12 * ctx.lineWidth
  ctx.font = `${fontSize}px Inconsolata`
  // ctx.font = '12px serif'
  const words = ['lets', 'go', 'no', 'mun', 'you', 'right']
  const wordCount = _.sample([1, 2, 3])
  const text = _.sampleSize(words, wordCount).join('')
  ctx.fillText(text, distance, distance)
}

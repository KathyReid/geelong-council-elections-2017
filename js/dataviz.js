/*
  @description defines the names which will be used to title the chords
*/
var nameProvider = [
  'First Preferences',
  'GILLARD Terry',
  'CSAR Ellen',
  'NEAL Charles',
  'AIDT Mik',
  'HATHWAY Sarah',
  'JACKA Jacki',
  'SIMMONDS Stephen',
  'MITCHELL Peter',
  'BALLAS George',
  'GAMBLE Jennifer',
  'BULL Sue',
  'CADWELL Melissa',
  'KING Michael',
  'SANDNER, Alec',
  'FIDGE Freya',
  'MURRIHY, Peter',
  'MANSFIELD, Sarah',
  'KONTELJ, Eddy'
]

var matrix = [
  [0, 302, 334, 585, 636, 764, 943, 995, 849, 1155, 879, 1473, 1859, 2328, 2359, 2521, 4562, 6995, 9715], // 1st preferences
  [0, 0, 5, 26, 21, 12, 9, 8, 13, 8, 18, 16, 6, 35, 29, 13, 20, 31, 32], // GILLARD Terry
  [0, 0, 0, 11, 24, 53, 8, 1, 23, 5, 16, 39, 55, 6, 27, 14, 20, 25, 20], // CSAR Ellen
  [0, 0, 0, 0, 43, 25, 24, 28, 39, 20, 52, 40, 16, 50, 68, 28, 49, 67, 73], // NEAL Charles - KONTELJ is elected after this distribution
  [0, 0, 0, 0, 0, 42, 33, 34, 127, 56, 44, 55, 29, 46, 75, 51, 60, 204, 0], // AIDT Mik
  [0, 0, 0, 0, 0, 0, 39, 24, 107, 17, 109, 349, 50, 23, 158, 60, 25, 143, 0], // HATHWAY Sarah
  [0, 0, 0, 0, 0, 0, 0, 69, 36, 306, 347, 80, 212, 136, 76, 152, 80, 145, 0], // JACKA Jacki
  [0, 0, 0, 0, 0, 0, 0, 0, 82, 122, 40, 60, 132, 162, 159, 412, 265, 113, 0], // SIMMONDS Stephen
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 139, 129, 192, 47, 132, 357, 105, 162, 247, 0], // MITCHELL Peter
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 130, 470, 298, 247, 324, 446, 97, 0], // BALLAS George
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 434, 218, 135, 299, 157, 140, 533, 0], // GAMBLE Jennifer
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 481, 256, 537, 265, 261, 1320, 0], // BULL Sue
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 467, 604, 958, 1046, 824, 0], // CADWELL Melissa - MANSFIELD is elected after this distribution
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1995, 1975, 2771, 0, 0], // KING Michael
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 590, 1769, 0, 0], // SANDNER Alec
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // FIDGE Freya
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // MURRIHY Peter
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // MANSFIELD Sarah
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // KONTELJ Eddy
]

/* Define the colours for each of the arcs */
var colours = ([
  '#91A8D0',
  '#91A8D0',
  '#91A8D0',
  '#91A8D0',
  '#91A8D0',
  '#91A8D0',
  '#91A8D0',
  '#98DDDE',
  '#F7CAC9',
  '#F7CAC9',
  '#F7CAC9',
  '#F7CAC9',
  '#9896A4',
  '#91A8D0',
  '#91A8D0',
  '#91A8D0',
  '#91A8D0',
  '#91A8D0',
  '#91A8D0'
])

console.log('after colours')

var widthModifier = 0.8
var heightModifier = 0.8

var width = innerWidth * widthModifier
var height = innerHeight * heightModifier

var outerRadius = Math.min(width, height) * 0.5 - 40
var innerRadius = outerRadius - 30

console.log(width + ' - ' + height + ' - ' + outerRadius + ' - ' + innerRadius)

/* Define the SVG element and group to hold the ribbons */

console.log('before svg')

var svg = d3.select('#container').append('svg')
  .attr('width', width)
  .attr('height', height)
  .attr('id', 'svg')

console.log('before chords, arcs, ribbon, color')

var chord = d3.chord()
  .padAngle(0.02)
  .sortSubgroups(d3.descending)

var arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)

var ribbon = d3.ribbon()
    .radius(innerRadius)

var color = d3.scaleOrdinal()
    .domain(d3.range(nameProvider.length))
    .range(colours)

console.log('before diagram')

var diagram = svg.append('g')
  .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
  .datum(chord(matrix))


  console.log('before group')

var group = diagram.append('g')
  .attr('class', 'group')
  .attr('id', 'group')
  .selectAll('g')
  .data(function (chords) { return chords.groups })
  .enter().append('g')

  console.log('before path')


group.append('path')
  .style('fill', function (d) { return color(d.index) })
  .style('stroke', function (d) { return d3.rgb(color(d.index)).darker() })
  .attr('d', arc)

  console.log('before g')


diagram.append('g')
  .attr('class', 'ribbons')
  .selectAll('path')
  .data(function (chords) { return chords })
  .enter().append('path')
  .attr('d', ribbon)
    .style('fill', function (d) { return d.color })
    .style('opacity', 0.9)
    .style('stroke', function (d) { return d3.rgb(color(d.target.index)).darker() })

group.append('svg:text')
      .each(function (d) { d.angle = (d.startAngle + d.endAngle) / 2 })
      .attr('dy', '.35em')
      .attr('class', 'titles')
      .attr('text-anchor', function (d) { return d.angle > Math.PI ? 'end' : null })
      .attr('transform', function (d) {
        return 'rotate(' + (d.angle * 180 / Math.PI - 90) + ')' + 'translate(' + (innerRadius + 10) + ')' + (d.angle > Math.PI ? 'rotate(180)' : '')
      })
      .attr('opacity', 1)
      .text(function (d, i) { return nameProvider[i] })

let names = []

function addName() {
  let inName = document.getElementById('inName')
  let inPoints = document.getElementById('inPoints')

  let name = inName.value
  let points = inPoints.value

  if (!name || !points) {
    alert('Please fill out all fields!')

    return
  }

  names.push({ name: name, points: points })

  console.log(names)

  inName.value = ''
  inPoints.value = ''
  inName.focus()

  showList()
}

function showList() {
  let list = ''

  names.map(item => {
    list += '<p>' + item.name + ' - ' + item.points + ' points </p>'
  })

  document.getElementById('outList').innerHTML = list
}

function clearList() {
  location.reload()
}

function showApprovedList() {
  let passingScore = Number(prompt('Passing Score:'))

  let copy = names.slice()

  copy.sort(function (a, b) {
    return a.points - b.points
  })

  copyRanked = copy.reverse()

  let approvedList = ''
  let nonApprovedList = ''

  copyRanked.map(item => {
    if (item.points >= passingScore) {
      approvedList += '<p>' + item.name + ' - ' + item.points + ' points </p>'
    } else {
      nonApprovedList +=
        '<p>' + item.name + ' - ' + item.points + ' points </p>'
    }
  })

  if (approvedList == '') {
    alert("There's no one in approved list")
    return
  }

  let outList = document.getElementById('outList')

  outList.innerHTML = '<h3>Approved List</h3><br>' + approvedList

  if (nonApprovedList != '') {
    outList.innerHTML += '<br><h3>Non-Approved List</h3><br>' + nonApprovedList
  }
}

let btnAdd = document.getElementById('btnAdd')
let btnClear = document.getElementById('btnClear')
let btnApproved = document.getElementById('btnApproved')

btnAdd.addEventListener('click', addName)
btnClear.addEventListener('click', clearList)
btnApproved.addEventListener('click', showApprovedList)

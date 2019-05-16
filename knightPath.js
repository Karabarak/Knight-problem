let start;
let finish;
let currentPosition = [];
let startPosition = [];
let finishPosition = [];
let rows = [];
let columns = [];

function isEven(n) {
  return n % 2 == 0;
};

function reset() {
  start = undefined;
  finish = undefined;
  currentPosition = [];
  rows = [];
  columns = [];
}

function resetPath() {
  start = undefined;
  finish = undefined;
  currentPosition = [];
}

function gChessboard(dimension) {
  reset();
  for (i = 0; i < dimension; i++) {
    $('#table').append('<div class="row remove" id="row' + i + '"></div>');
    for (j = 0; j < (dimension / 2); j++) {
      if (isEven(i)) {
        $('#row' + i).append('<div class="whiterectangle col-sm remove row' + i + ' column' + (j * 2) + '"><p class="row">' + i + '</p><p class="column">' + (j * 2) + '</p></div>');
        $('#row' + i).append('<div class="blackrectangle col-sm remove row' + i + ' column' + ((j * 2) + 1) + '"><p class="row">' + i + '</p><p class="column">' + ((j * 2) + 1) + '</p></div>');
      } else {
        $('#row' + i).append('<div class="blackrectangle col-sm remove row' + i + ' column' + (j * 2) + '"><p class="row">' + i + '</p><p class="column">' + (j * 2) + '</p></div>');
        $('#row' + i).append('<div class="whiterectangle col-sm remove row' + i + ' column' + ((j * 2) + 1) + '"><p class="row">' + i + '</p><p class="column">' + ((j * 2) + 1) + '</p></div>');
      };
    };
  };
};

function populateArrays(dimension) {
  for (i = 0; i < dimension; i++) {
    rows.push(i);
    columns.push(i);
  }
}

function checkFinish() {
  if (currentPosition[0] === parseInt(finish.charAt(0)) && currentPosition[1] === parseInt(finish.charAt(1))) {
    console.log('Reached destination!');
  };
};

$(document).on('click', 'button.nextStep', function() {
let t = 0
  while (currentPosition[0] !== finishPosition[0] || currentPosition[1] !== finishPosition[1]) {

    nextStep();
    $('.row' + currentPosition[0].toString() + '.column' + currentPosition[1].toString()).addClass('currentPosition');
  t++;
  console.log('finishPosition: ' + finishPosition);
  console.log('currentPosition:' + currentPosition);
  console.log('.row' + currentPosition[0].toString() + ', .column' + currentPosition[1].toString())
  };
  console.log('it took ' + t + ' turns')
  checkFinish();
});

$('button.generate').click(function() {
  $('.remove').remove();
  gChessboard($('input').val());
  populateArrays($('input').val())
  console.log('rows: ' + rows);
  console.log('columns: ' + columns);
});

$('button.reset').click(function() {
  $('.start').removeClass('start');
  $('.finish').removeClass('finish');
  $('.currentPosition').removeClass('currentPosition');
  resetPath();
});

$(document).on('click', 'div.col-sm', function() {
  if (start !== undefined && finish === undefined) {
    finish = $(this).children().text();
    $(this).addClass('finish');
    finishPosition = [parseInt(finish.charAt(0)), parseInt(finish.charAt(1))];
  }
  if (start === undefined) {
    start = $(this).children().text();
    $(this).addClass('start');
    startPosition = [parseInt(start.charAt(0)), parseInt(start.charAt(1))];
    currentPosition = startPosition;
  }
});

function nextStep() {
  if (currentPosition[0] - finishPosition[0] === -3 && currentPosition[1] - finishPosition[1] === 4) {
    currentPosition[0] = currentPosition[0] + 2;
    currentPosition[1] = currentPosition[1] - 1;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 3 && currentPosition[1] - finishPosition[1] === 4) {
    currentPosition[0] = currentPosition[0] - 2;
    currentPosition[1] = currentPosition[1] - 1;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 3 && currentPosition[1] - finishPosition[1] === -4) {
    currentPosition[0] = currentPosition[0] - 2;
    currentPosition[1] = currentPosition[1] + 1;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === -3 && currentPosition[1] - finishPosition[1] === -4) {
    currentPosition[0] = currentPosition[0] + 2;
    currentPosition[1] = currentPosition[1] + 1;
    return;
  }

  if (currentPosition[0] - finishPosition[0] === -4 && currentPosition[1] - finishPosition[1] === 3) {
    currentPosition[0] = currentPosition[0] + 1;
    currentPosition[1] = currentPosition[1] - 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 4 && currentPosition[1] - finishPosition[1] === 3) {
    currentPosition[0] = currentPosition[0] - 1;
    currentPosition[1] = currentPosition[1] - 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 4 && currentPosition[1] - finishPosition[1] === -3) {
    currentPosition[0] = currentPosition[0] - 1;
    currentPosition[1] = currentPosition[1] + 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === -4 && currentPosition[1] - finishPosition[1] === -3) {
    currentPosition[0] = currentPosition[0] + 1;
    currentPosition[1] = currentPosition[1] + 2;
    return;
  }

  if (currentPosition[0] - finishPosition[0] === -3 && currentPosition[1] - finishPosition[1] === 1) {
    currentPosition[0] = currentPosition[0] + 1;
    currentPosition[1] = currentPosition[1] - 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 3 && currentPosition[1] - finishPosition[1] === 1) {
    currentPosition[0] = currentPosition[0] - 1;
    currentPosition[1] = currentPosition[1] - 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 3 && currentPosition[1] - finishPosition[1] === -1) {
    currentPosition[0] = currentPosition[0] - 2;
    currentPosition[1] = currentPosition[1] - 1;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === -3 && currentPosition[1] - finishPosition[1] === -1) {
    currentPosition[0] = currentPosition[0] + 1;
    currentPosition[1] = currentPosition[1] + 2;
    return;
  }

  if (currentPosition[0] - finishPosition[0] === -1 && currentPosition[1] - finishPosition[1] === -3) {
    currentPosition[0] = currentPosition[0] - 1;
    currentPosition[1] = currentPosition[1] + 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === -1 && currentPosition[1] - finishPosition[1] === 3) {
    currentPosition[0] = currentPosition[0] + 2;
    currentPosition[1] = currentPosition[1] - 1;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 1 && currentPosition[1] - finishPosition[1] === 3) {
    currentPosition[0] = currentPosition[0] + 1;
    currentPosition[1] = currentPosition[1] - 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 1 && currentPosition[1] - finishPosition[1] === -3) {
    currentPosition[0] = currentPosition[0] + 1;
    currentPosition[1] = currentPosition[1] + 2;
    return;
  }

  if (currentPosition[0] - finishPosition[0] === 1 && currentPosition[1] - finishPosition[1] === 1) {
    currentPosition[0] = currentPosition[0] + 1;
    currentPosition[1] = currentPosition[1] - 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === -1 && currentPosition[1] - finishPosition[1] === 1) {
    currentPosition[0] = currentPosition[0] - 1;
    currentPosition[1] = currentPosition[1] - 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === -1 && currentPosition[1] - finishPosition[1] === -1) {
    currentPosition[0] = currentPosition[0] - 1;
    currentPosition[1] = currentPosition[1] + 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 1 && currentPosition[1] - finishPosition[1] === -1) {
    currentPosition[0] = currentPosition[0] + 1;
    currentPosition[1] = currentPosition[1] + 2;
    return;
  }

  if (currentPosition[0] - finishPosition[0] === 0 && currentPosition[1] - finishPosition[1] === -2) {
    currentPosition[0] = currentPosition[0] - 2;
    currentPosition[1] = currentPosition[1] + 1;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === -2 && currentPosition[1] - finishPosition[1] === 0) {
    currentPosition[0] = currentPosition[0] + 1;
    currentPosition[1] = currentPosition[1] + 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 0 && currentPosition[1] - finishPosition[1] === 2) {
    currentPosition[0] = currentPosition[0] - 2;
    currentPosition[1] = currentPosition[1] - 1;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 2 && currentPosition[1] - finishPosition[1] === 0) {
    currentPosition[0] = currentPosition[0] - 1;
    currentPosition[1] = currentPosition[1] + 2;
    return;
  }

  if (currentPosition[0] - finishPosition[0] === 0 && currentPosition[1] - finishPosition[1] < 0) {
    currentPosition[0] = currentPosition[0] - 1;
    currentPosition[1] = currentPosition[1] + 2;
    return;
  }
  if (currentPosition[0] - finishPosition[0] < 0 && currentPosition[1] - finishPosition[1] === 0) {
    currentPosition[0] = currentPosition[0] + 2;
    currentPosition[1] = currentPosition[1] + 1;
    return;
  }
  if (currentPosition[0] - finishPosition[0] === 0 && currentPosition[1] - finishPosition[1] > 0) {
    currentPosition[0] = currentPosition[0] - 1;
    currentPosition[1] = currentPosition[1] - 2;
    return;
  }

  if (currentPosition[0] - finishPosition[0] > 0 && currentPosition[1] - finishPosition[1] === 0) {
    currentPosition[0] = currentPosition[0] - 2;
    currentPosition[1] = currentPosition[1] + 1;
    return;
  }

  if (currentPosition[0] - finishPosition[0] > 0 && currentPosition[1] - finishPosition[1] > 0) {
    if (Math.abs(currentPosition[0] - finishPosition[0]) === Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] - 2;
      currentPosition[1] = currentPosition[1] - 1;
      return;
    }
    if (Math.abs(currentPosition[0] - finishPosition[0]) > Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] - 2;
      currentPosition[1] = currentPosition[1] - 1;
      return;
    }
    if (Math.abs(currentPosition[0] - finishPosition[0]) < Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] - 1;
      currentPosition[1] = currentPosition[1] - 2;
      return;
    }
  }

  if (currentPosition[0] - finishPosition[0] < 0 && currentPosition[1] - finishPosition[1] < 0) {
    if (Math.abs(currentPosition[0] - finishPosition[0]) === Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] + 2;
      currentPosition[1] = currentPosition[1] + 1;
      return;
    }
    if (Math.abs(currentPosition[0] - finishPosition[0]) > Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] + 2;
      currentPosition[1] = currentPosition[1] + 1;
      return;
    }
    if (Math.abs(currentPosition[0] - finishPosition[0]) < Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] + 1;
      currentPosition[1] = currentPosition[1] + 2;
      return;
    }
  }

  if (currentPosition[0] - finishPosition[0] > 0 && currentPosition[1] - finishPosition[1] < 0) {
    if (Math.abs(currentPosition[0] - finishPosition[0]) === Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] - 2;
      currentPosition[1] = currentPosition[1] + 1;
      return;
    }
    if (Math.abs(currentPosition[0] - finishPosition[0]) > Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] - 2;
      currentPosition[1] = currentPosition[1] + 1;
      return;
    }
    if (Math.abs(currentPosition[0] - finishPosition[0]) < Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] - 1;
      currentPosition[1] = currentPosition[1] + 2;
      return;
    }
  }
  if (currentPosition[0] - finishPosition[0] < 0 && currentPosition[1] - finishPosition[1] > 0) {
    if (Math.abs(currentPosition[0] - finishPosition[0]) === Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] + 2;
      currentPosition[1] = currentPosition[1] - 1;
      return;
    }
    if (Math.abs(currentPosition[0] - finishPosition[0]) > Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] + 2;
      currentPosition[1] = currentPosition[1] - 1;
    }
    if (Math.abs(currentPosition[0] - finishPosition[0]) < Math.abs(currentPosition[1] - finishPosition[1])) {
      currentPosition[0] = currentPosition[0] + 1;
      currentPosition[1] = currentPosition[1] - 2;
      return;
    }
  }
};

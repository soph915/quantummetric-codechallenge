
var sqlComparisons = {
  starts_with: ['LIKE', startsWithToSql],
  does_not_start_with: ['NOT LIKE', startsWithToSql],
  char_equals: ['=', equalsToSql],
  char_does_not_equal: ['!=', equalsToSql],
  contains: ['LIKE', containsToSql],
  does_not_contain: ['NOT LIKE', containsToSql],
  less_than_or_equal: ['<=', numInputToSql],
  greater_than_or_equal: ['>=', numInputToSql],
  equals: ['=', numInputToSql],
  does_not_equal: ['!=', numInputToSql],
  in_list: ['IN', inListToSql],
  not_in_list: ['NOT IN', inListToSql],
  range: 'BETWEEN',
}

function startsWithToSql(input) {
  return "'" + input + "%'"
}

function containsToSql(input) {
  return "'%" + input + "%'" 
}

function equalsToSql(input) {
  return "'" + input + "'"
}

function equalsToSql(input) {
  return "'" + input + "'"
}

function numInputToSql(input) {
  return Number(input) 
}

function inListToSql(input) {
  let listItems = input.split(' ')
  listItems = listItems.map(function(x){return "'" + x + "'"}) 
  return "(" + listItems.join(', ') + ")"
}

//todo: in list, not in list, contains all, range 


function convertToSql(queries) {
    let output = 'SELECT * FROM session WHERE '

    for (let i=0; i<queries.length; i++) {

        queries[i] = JSON.parse(queries[i])
        var event = queries[i].event
        var predicate = sqlComparisons[(queries[i]).predicate]
        var input = queries[i].input

        if (event === undefined || predicate === undefined || input === undefined) {
            continue;
        }

        var constraint = `${event} ${predicate[0]} ${predicate[1](input)} `
        if (i>0) {
            output += 'AND ' + constraint
        } else {
            output += constraint 
        }
    }
    return output ;

}

module.exports.convertToSql = convertToSql;

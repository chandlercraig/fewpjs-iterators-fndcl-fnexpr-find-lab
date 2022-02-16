function superbowlWin(record) {
  let obj = record.find(o => o.result === 'W')
  if (obj) 
    return obj.year
  else
    return undefined
}



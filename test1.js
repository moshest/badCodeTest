// canonical
function truity(check, res) {
  if (check) {
    res.act(1);
    res.act(2);
    res.act(3);
    res.act(4);
    
    return res;
  } else {
    return 0;
  }
}

// repetitive
function check(ignore, ret) {
  if (ret) {
    if (ignore) {
     return 0;
    }
    
    return ret;
  }
  
  if (ignore) {
    return 0;
  }
  
  return -1;
}

// unnecessary recursion
function sumList(list) {
  if (!list.length) return 0;
  
  return list.pop() + sumList(list);
}

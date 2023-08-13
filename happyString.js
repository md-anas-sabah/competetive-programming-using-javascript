function chefMood() {
  let t=1;

  let c = 0;
  while (t--) {
    let s = "aeiou";
    let len = s.length;
    for (let i = 0; i < len; i++) {
      if (
        s[i] === "a" ||
        s[i] === "e" ||
        s[i] === "i" ||
        s[i] === "o" ||
        s[i] === "u"
      ) {
        c++;
        if (c == 3) console.log("Happy\n");
      } else c = 0;
    }
    if (c != 3) console.log("Sad\n");
  }
  return 0;
}

chefMood();

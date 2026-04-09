let star = "";
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        star += "*";
    }
    console.log(star);
    star = "";
}

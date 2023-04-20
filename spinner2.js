const str = ['\r|  ','\r/  ','\r-  ','\r\\  ','\r|  ','\r/  ','\r-  ','\r\\  ','\r|  '];
let delay = 100;
for (const item of str) {
  setTimeout(() => {
    process.stdout.write(item);
  }, delay);
  delay += 200;
}
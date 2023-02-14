const spinner = ['|','/','-','\\'];
let i = 0;
let timer = 100;
while (i < 9) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i % 4]}   `);
    if (i === 8) {
      process.stdout.write('\n');
    }
  }, timer + i * 200);
  i++;
}

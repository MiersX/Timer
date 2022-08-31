const args = process.argv.slice(2);

for (const element of args) {

  if (element < 0) { 
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, element * 1000);
};

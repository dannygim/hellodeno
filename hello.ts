const colors = [31, 32, 33, 34, 35, 36, 37, 90, 91, 92, 93, 94, 95, 96, 97];
let step = 0;
setInterval(async () => {
    await Deno.stdout.write(new TextEncoder().encode(`\r\x1b[${colors[step]}mWelcome to Deno Demo\x1b[0m`));
    step++;
    if (step >= colors.length) {
        step = 0;
    }
}, 300);
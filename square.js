let m = 5; 
for (let i = 1; i <= m; i++) {
    if (i === 1 || i === m) { 
        console.log('*'.repeat(m));
    } else { 
        console.log('*' + ' '.repeat(m - 2) + '*');
    }
}
console.log( process.argv.reduce( (m, arg) =>  isNaN(+arg) ? m + 0 : m + +arg, 0 ));


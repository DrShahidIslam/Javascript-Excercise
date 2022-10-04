function car(company, model, ...args) {
    const data = {
        company,
        model,
        ...args
    }
    console.log(data)
}


car("Toyota", "camri", "blue", "sedan")
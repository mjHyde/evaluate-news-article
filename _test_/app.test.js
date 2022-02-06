//tests for functions 
const { getData, updateWeatherWidget, checkData, getWeather, dataEntry } = require('../src/Client/app');

// console.log(getData);



test('test that returns something', () => {
    // const mock = jest.fn();
    expect(updateWeatherWidget()).toHaveBeenCalled()
})


// //testing async promises 
// test('testing async return value', () => {
//     expect.assertions(1);
//     return 
// })
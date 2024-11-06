import '@testing-library/jest-dom';
import 'whatwg-fetch'; 

global.HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
    fillRect: jest.fn(),
    clearRect: jest.fn(),
    getImageData: jest.fn(),
    putImageData: jest.fn(),
    drawImage: jest.fn(),
}));

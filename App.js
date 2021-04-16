const { UnRTF } = require('node-unrtf');

const unRtf = new UnRTF('./usr/bin');
const file = '/test.rtf';
const options = {
	outputHtml: true,
};

unRtf.convert(file, options).then(res => {
	console.log(res);
});

const btn = document.querySelector('.btn'),
	elem = document.querySelector('.box');  

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

/*

let pos = 0;

function myAnimation() {
	console.log('myAnimation');
	pos++;
	elem.style.top = pos + 'px';
	elem.style.left = pos + 'px';

	if (pos < 300) {
		requestAnimationFrame(myAnimation);
	}
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);

*/

//*
let pos = 0;
let animId = 0;

function myAnimation() {
	console.log('myAnimation');
	pos += 1;
	elem.style.top = pos + 'px';
	elem.style.left = pos + 'px';

	if (pos >= 300) pos = 0;

	animId = requestAnimationFrame(myAnimation);
}

function startAnimation() {
	console.log('startAnimation');
	// stopAnimation();

	const id = requestAnimationFrame(myAnimation);
	cancelAnimationFrame(id);
	console.log(`cancelAnimationFrame(${id})`);

	requestAnimationFrame(myAnimation);
}

function stopAnimation() {
	console.log('stopAnimation');
	// const id = requestAnimationFrame(myAnimation);
	const id = animId;
	cancelAnimationFrame(id);
	console.log(`cancelAnimationFrame(${id})`);
}

btn.addEventListener('click', startAnimation );
document.querySelector('#btn2').addEventListener('click', stopAnimation );

//*/
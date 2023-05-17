function timer () {

	const deadline = '2022-04-22';
	setClock('.timer', deadline);
	
	function getTimeRemaining(_endtime) {
		let vT = Date.parse(_endtime) - Date.now();
		if (vT < 0) vT = 0;
	
		const vMsecInSec    = 1000;
		const vMsecInMinute = vMsecInSec    * 60;
		const vMsecInHour   = vMsecInMinute * 60;
		const vMsecInDay    = vMsecInHour   * 24;
	
		const vDays    = Math.floor(vT / vMsecInDay        );
		const vHours   = Math.floor(vT / vMsecInHour   % 24);
		const vMinutes = Math.floor(vT / vMsecInMinute % 60);
		const vSeconds = Math.floor(vT / vMsecInSec    % 60);
		// console.log( `vDays=${vDays}, vHours=${vHours}, vMinutes=${vMinutes}, vSeconds=${vSeconds}` );
		return {
			total:   vT,
			days:    vDays,
			hours:   vHours,
			minuts:  vMinutes,
			seconds: vSeconds
		};
	}

	function setClock (_selector, _endtime) {
		const vTimer = document.querySelector(_selector);
		const vDays = vTimer.querySelector('#days');
		const vHours = vTimer.querySelector('#hours');
		const vMinutes = vTimer.querySelector('#minutes');
		const vSeconds = vTimer.querySelector('#seconds');
		const vTimeInterval = setInterval( updateClock, 1000);
		updateClock();
	
		function updateClock () {
			const vT = getTimeRemaining(_endtime);
				
			vDays.innerText    = setZero(vT.days   );
			vHours.innerText   = setZero(vT.hours  );
			vMinutes.innerText = setZero(vT.minuts );
			vSeconds.innerText = setZero(vT.seconds);
				
			if (vT.total <= 0) {
				clearInterval(vTimeInterval);
			}
		}

		function setZero (_num) {
			if (_num < 0 || _num >= 10) return `${_num}`;
			return `0${_num}`;
		}
	}
	
}

module.exports = timer;

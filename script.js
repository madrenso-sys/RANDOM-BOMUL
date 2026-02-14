let timer = null;
const displayImg = document.getElementById('display-img');
const rollBtn = document.getElementById('roll-btn');
const stopBtn = document.getElementById('stop-btn');

// ROLL 버튼 클릭 시
rollBtn.addEventListener('click', () => {
    rollBtn.disabled = true;
    stopBtn.disabled = false;
    
    // 실행 중 효과 추가
    displayImg.classList.add('fast-running');

    // 0.07초(70ms) 간격: 인지 가능하면서도 빠른 속도
    timer = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 63) + 1;
        const fileName = `Q_${randomNum}.png`; 
        displayImg.src = encodeURI(fileName);
    }, 70); 
});

// STOP 버튼 클릭 시
stopBtn.addEventListener('click', () => {
    stopBtn.disabled = true;
    rollBtn.disabled = false;
    
    // 효과 제거
    displayImg.classList.remove('fast-running');

    // 루프 정지
    clearInterval(timer);
    
    // 멈췄을 때 '탁!' 멈춘 느낌을 주는 반짝임 효과
    displayImg.style.filter = "brightness(1.5)";
    setTimeout(() => {
        displayImg.style.filter = "brightness(1)";
    }, 200);
});

let timer = null;
const displayImg = document.getElementById('display-img');
const rollBtn = document.getElementById('roll-btn');
const stopBtn = document.getElementById('stop-btn');

// ROLL 버튼 클릭 시
rollBtn.addEventListener('click', () => {
    rollBtn.disabled = true;
    stopBtn.disabled = false;
    displayImg.classList.add('fast-running');

    // 0.01초(10ms)마다 이미지 무작위 변경 - 초고속 모드
    timer = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 63) + 1;
        const fileName = `Q_${randomNum}.png`; // 파일명이 Q_1.png ~ Q_63.png 인 경우
        displayImg.src = encodeURI(fileName);
    }, 10); 
});

// STOP 버튼 클릭 시
stopBtn.addEventListener('click', () => {
    stopBtn.disabled = true;
    rollBtn.disabled = false;
    displayImg.classList.remove('fast-running');

    // 루프 정지
    clearInterval(timer);
    
    // 멈췄을 때 강조 효과
    displayImg.style.border = "5px solid gold";
    setTimeout(() => {
        displayImg.style.border = "none";
    }, 500);
});
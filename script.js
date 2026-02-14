let timer = null;
const displayImg = document.getElementById('display-img');
const rollBtn = document.getElementById('roll-btn');
const stopBtn = document.getElementById('stop-btn');

// ROLL 버튼 클릭 시
rollBtn.addEventListener('click', () => {
    // 1. 버튼 상태 변경
    rollBtn.disabled = true;
    stopBtn.disabled = false;
    
    // 2. 애니메이션 효과 추가
    displayImg.classList.add('fast-running');

    // 3. [중요] 기다리지 않고 즉시 첫 번째 랜덤 이미지 출력
    changeImage(); 

    // 4. 이후 0.07초마다 반복 실행
    timer = setInterval(changeImage, 70); 
});

// 이미지를 바꾸는 기능을 따로 뺐습니다.
function changeImage() {
    const randomNum = Math.floor(Math.random() * 63) + 1;
    const fileName = `Q_${randomNum}.png`; 
    displayImg.src = encodeURI(fileName);
}

// STOP 버튼 클릭 시
stopBtn.addEventListener('click', () => {
    // 버튼 상태 복구
    stopBtn.disabled = true;
    rollBtn.disabled = false;
    
    // 애니메이션 제거
    displayImg.classList.remove('fast-running');

    // 타이머 멈춤
    clearInterval(timer);
    
    // 멈췄을 때 강조 효과 (번쩍!)
    displayImg.style.filter = "brightness(1.5)";
    setTimeout(() => {
        displayImg.style.filter = "brightness(1)";
    }, 200);
});

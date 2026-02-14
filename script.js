let timer = null;
const displayImg = document.getElementById('display-img');
const rollBtn = document.getElementById('roll-btn');
const stopBtn = document.getElementById('stop-btn');

// [추가] 63장의 이미지를 미리 브라우저 메모리에 올려두기 (로딩 지연 방지)
const images = [];
function preloadImages() {
    for (let i = 1; i <= 63; i++) {
        const img = new Image();
        img.src = encodeURI(`Q_${i}.png`);
        images.push(img);
    }
}
preloadImages(); // 페이지 열리자마자 실행

function changeImage() {
    const randomNum = Math.floor(Math.random() * 63) + 1;
    const fileName = `Q_${randomNum}.png`; 
    displayImg.src = encodeURI(fileName);
}

// ROLL 버튼 클릭 시
rollBtn.addEventListener('click', () => {
    rollBtn.disabled = true;
    stopBtn.disabled = false;
    
    displayImg.classList.add('fast-running');

    // 누르자마자 즉시 한번 바꾸기
    changeImage();

    // 0.08초 간격으로 반복 (너무 빠르면 로딩이 못 따라오니 0.08초로 살짝 조정)
    timer = setInterval(changeImage, 80); 
});

// STOP 버튼 클릭 시
stopBtn.addEventListener('click', () => {
    stopBtn.disabled = true;
    rollBtn.disabled = false;
    
    displayImg.classList.remove('fast-running');
    clearInterval(timer);
    
    // 멈춘 효과 강조
    displayImg.style.filter = "brightness(1.5)";
    setTimeout(() => {
        displayImg.style.filter = "brightness(1)";
    }, 200);
});

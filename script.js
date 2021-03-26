// 1. 변수 지정

var sliderWrapper = document.querySelector(".container"),
    sliderContainer = document.querySelector(".slider-container"),
    slides = document.querySelectorAll(".slide"),
    slideCount = slides.length, // 슬라이드의 개수
    topHeight = 0,
    currentIndex = 0,
    navPrev = document.getElementById("prev"),
    navNext = document.getElementById("next");

// 2. 슬라이드의 높이 확인하여 부모의 높이로 지정하기

// topHeight = slides[0].offsetHeight;
// console.log(topHeight) //

for (var i = 0; i < slideCount; i++) {
    if (topHeight < slides[i].offsetHeight) {
        topHeight = slides[i].offsetHeight;
    }
}

console.log(topHeight);

sliderWrapper.style.height = topHeight + "px";
sliderContainer.style.height = topHeight + "px";

// 3. 슬라이드가 있으면 가로로 배열하기

for (var a = 0; a < slideCount; a++) {
    slides[a].style.left = a * 100 + "%";
}

// 4. 슬라이드 이동 함수

function goToSlide(idx) {
    sliderContainer.style.left = idx * -100 + "%";
    sliderContainer.classList.add("animated");
    currentIndex = idx;

    // updateNav();
}

// 5. 버튼 기능 업데이트 함수

/* function updateNav() {
    // 첫 페이지라면
    if (currentIndex == 0) {
        navPrev.classList.add("disabled");
    } else {
        navPrev.classList.remove("disabled");
    }

    // 마지막 페이지라면
    if (currentIndex == slideCount - 1) {
        navNext.classList.add("disabled");
    } else {
        navNext.classList.remove("disabled");
    }
} */

// 6. 버튼을 클릭하면 슬라이드 이동시기키

navPrev.addEventListener("click", function (e) {
    e.preventDefault();

    // goToSlide(currentIndex - 1);

    // 첫 페이지라면
    if (currentIndex == 0) {
        goToSlide(slideCount - 1);
    } else {
        goToSlide(currentIndex - 1);
    }
});
navNext.addEventListener("click", function (e) {
    e.preventDefault();

    // goToSlide(currentIndex + 1);

    // 마지막 페이지라면
    if (currentIndex == slideCount - 1) {
        goToSlide(0);
    } else {
        goToSlide(currentIndex + 1);
    }
});

// 7. 첫번째 슬라이드 먼저 보이도록 하기

// goToSlide(0); // 이걸 안적으면 처음에 이전 화살표가 표시되기 때문에 적음


$(function () {
    const spanEl = document.querySelector("#main .container_1 p span");
    const txtArr = ['녕하세요. 저는 데이터 분석가가 되기 위해 노력 중인 강연배입니다.\n' +
    '저는 데이터를 바탕으로 의사 결정을 내리는 일에 관심을 가지고 있습니다. 이를 위해 다양한 분야의 데이터 분석 경험을 쌓고 있습니다.\n' +
    '저는 데이터 분석뿐만 아니라 프로그래밍, 통계학, 머신러닝, 딥러닝 등 다양한 분야에도 관심을 가지고 공부하고 있습니다.'];
    let index = 0;
    let currentTxt = txtArr[index].split("");

    function writeTxt() {
        spanEl.textContent += currentTxt.shift();
        if (currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 300));
                } else {
                    currentTxt = spanEl.textContent.split("");
                    setTimeout(deleteTxt, 3000);
                }
            }

            function deleteTxt() {
                if (currentTxt.length !== 0) {
                    currentTxt.pop();
                    spanEl.textContent = currentTxt.join("");
                    setTimeout(deleteTxt, Math.floor(Math.random() * 200));
                } else {
                    setTimeout(() => {
                        index = (index + 1) % txtArr.length;
                        currentTxt = txtArr[index].split("");
                        writeTxt();
                    }, 3000);
                }
            }
            writeTxt();

});
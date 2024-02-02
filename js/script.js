

let currentlyOpenDropdown = null;

    function setupDropdown(buttonSelector, contentSelector, iconSelector) {
        let dropBtn = document.querySelector(buttonSelector);
        let dropCnt = document.querySelector(contentSelector);
        let plus = document.querySelector(iconSelector);

        if (dropBtn && dropCnt && plus) {
            dropBtn.addEventListener("click", function () {
                if (dropCnt.style.display === "block") {
                    dropCnt.style.display = "none";
                    plus.style.transform = "rotate(0deg)";
                    currentlyOpenDropdown = null;
                } else {
                    if (currentlyOpenDropdown) {
                        currentlyOpenDropdown.dropCnt.style.display = "none";
                        currentlyOpenDropdown.plus.style.transform = "rotate(0deg)";
                    }
                    dropCnt.style.display = "block";
                    plus.style.transform = "rotate(-45deg)";
                    currentlyOpenDropdown = { dropCnt, plus };
                }
            });
        } else {
            console.error("One or more elements not found with the provided selectors.");
        }
    }
    // Function Calling
    setupDropdown(".dropDown", ".dropContent", ".plusIcon");
    setupDropdown(".dropDown2", ".dropContent2", ".plusIcon2");
    setupDropdown(".dropDown3", ".dropContent3", ".plusIcon3");
    setupDropdown(".dropDown4", ".dropContent4", ".plusIcon4");
    setupDropdown(".dropDown5", ".dropContent5", ".plusIcon5");
    setupDropdown(".dropDown6", ".dropContent6", ".plusIcon6");

    // let eyeButton = document.querySelector(".bi-eye-slash-fill");
    // eyeButton.addEventListener("click", function () {
    //     console.log("Eye Button Was clicked");
    // });


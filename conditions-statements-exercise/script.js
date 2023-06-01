//Studying with conditions (Exercise which is end of teh section)

/*
1- Write the info of the note to #info with prompt by using the stucture below.
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2- Control the data which is entered by user is in a gap that we want.
3- If the data goes to FF, Show the FROWN icon. Other ones gonna be SMILE.
4- Let FF class name is text-danger - Other one is text-primary
*/

const SubmitGrade = document.getElementById("submit").addEventListener("click", () => {
    let examGrade = document.querySelector('#ExamResult').value
    let showGrade;
    let info = document.querySelector("#info")

const FROWN = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>
`
const HAPPY = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5c-.218 0-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5zm5.331 3a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zm-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5c-.218 0-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235z"/>
</svg>
`

if (examGrade >= 0 && examGrade <= 100) {
    showGrade = HAPPY;
    info.classList.add('text-primary')
    if (examGrade >= 90) {
        showGrade += "AA";
    } else if (examGrade >= 85) {
        showGrade += "BA";
    } else if (examGrade >= 80) {
        showGrade += "BB";
    } else if (examGrade >= 75) {
        showGrade += "CB";
    } else if (examGrade >= 70) {
        showGrade += "CC";
    } else if (examGrade >= 65) {
        showGrade += "DC";
    }  else if (examGrade >= 60) {
        showGrade += "DD";
    } else if (examGrade >= 50) {
        showGrade += "FD";
    } else if (examGrade > 0 && examGrade < 50) {
        showGrade = `${FROWN} FF `;
        info.classList.replace('text-primary', 'text-danger')
        // info.classList.add('text-danger')
    } else if (!examGrade) {
        showGrade = "There is no data is entered."
        info.classList.add('text-no-data')
    } 
}
else {
    showGrade = "Invalid Data is Entered"
    // info.classList.remove('text-danger')
}

info.innerHTML = `${showGrade} => ${examGrade}`;
})
//prompt("Enter your grade:")

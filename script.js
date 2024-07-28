// Select all elements with class 'choice' under '.choices'
let choices = document.querySelectorAll('.choices .choice');
let choices2 = document.querySelectorAll('.choices2 .choice2');

let user_score = 0;
let comp_score = 0;
let user_score_p = document.querySelector('#user');
let comp_score_p = document.querySelector('#Computer');

const playgame = (userChoice, comp_choose) => {
    
    if (userChoice+'2' == comp_choose) {
        const message=document.getElementById('msg.')

        message.textContent='DRAW'
        
        message.style.backgroundColor='grey'

        setTimeout(() => {
            message.style.backgroundColor = 'rgb(177, 231, 255)';
            message.textContent='Choose';
        }, 1500);
        console.log(`Draw`);
    } else if (userChoice == 'stone') {
        if (comp_choose == 'paper2') {
            console.log(`Computer won`);
            comp_score++;
            const message=document.getElementById('msg.')
            message.textContent='Computer Won'
        
            message.style.backgroundColor='Red'

            setTimeout(() => {
                message.style.backgroundColor = 'rgb(177, 231, 255)';
                message.textContent='Choose';
            }, 1500);

            const change=document.getElementById('choice2_paper2')
            change.style.backgroundColor = 'green'
            setTimeout(() => {
                change.style.backgroundColor = 'rgb(9, 21, 43)';
            }, 2000);
            comp_score_p.textContent = comp_score;
            comp_score_p.style.fontSize = "4rem";

        } else if (comp_choose == 'scissors2') {
            console.log(`User Won`);
            user_score++;
            const message=document.getElementById('msg.')
            message.textContent='User Won'
        
            message.style.backgroundColor='rgb(170, 255, 0)'

            setTimeout(() => {
                message.style.backgroundColor = 'rgb(177, 231, 255)';
                message.textContent='Choose';
            }, 1500);
            const change =document.getElementById('choice_stone');
            change.style.backgroundColor = 'green'
            setTimeout(() => {
                change.style.backgroundColor = 'rgb(9, 21, 43)';
            }, 2000);

            user_score_p.textContent = user_score;
            user_score_p.style.fontSize = "4rem";
        }
    } else if (userChoice == 'paper') {
        if (comp_choose == 'stone2') {
            console.log(`User won`);
            user_score++;
            const message=document.getElementById('msg.')
            
            message.textContent='User Won'
        
            message.style.backgroundColor='rgb(170, 255, 0)'

            setTimeout(() => {
                message.style.backgroundColor = 'rgb(177, 231, 255)';
                message.textContent='Choose';
            }, 1500);
            const change =document.getElementById('choice_paper');
            change.style.backgroundColor = 'green'
            setTimeout(() => {
                change.style.backgroundColor = 'rgb(9, 21, 43)';
            }, 2000);
            user_score_p.textContent = user_score;
            user_score_p.style.fontSize = "4rem";
        } else if (comp_choose == 'scissors2') {
            console.log(`Computer Won`);
            comp_score++;
            const message=document.getElementById('msg.')
            message.textContent='Computer Won'
        
            message.style.backgroundColor='Red'

            setTimeout(() => {
                message.style.backgroundColor = 'rgb(177, 231, 255)';
                message.textContent='Choose';
            }, 1500);
            const change =document.getElementById('choice2_scissor2');
            change.style.backgroundColor = 'green'
            setTimeout(() => {
                change.style.backgroundColor = 'rgb(9, 21, 43)';
            }, 2000);
            comp_score_p.textContent = comp_score;
            comp_score_p.style.fontSize = "4rem";
        }
    } else if (userChoice == 'scissors') {
        if (comp_choose == 'paper2') {
            console.log(`User won`);
            user_score++;
            const message=document.getElementById('msg.')
            message.textContent='User Won'
        
            message.style.backgroundColor='rgb(170, 255, 0)'

            setTimeout(() => {
                message.style.backgroundColor = 'rgb(177, 231, 255)';
                message.textContent='Choose';
            }, 1500);
            const change =document.getElementById('choice_scissor');
            change.style.backgroundColor = 'green'
            setTimeout(() => {
                change.style.backgroundColor = 'rgb(9, 21, 43)';
            }, 2000);
            user_score_p.textContent = user_score;
            user_score_p.style.fontSize = "4rem";
        } else if (comp_choose == 'stone2') {
            console.log(`Computer Won`);
            comp_score++;
            const message=document.getElementById('msg.')
            message.textContent='Computer Won'
        
            message.style.backgroundColor='Red'

            setTimeout(() => {
                message.style.backgroundColor = 'rgb(177, 231, 255)';
                message.textContent='Choose';
            }, 1500);
            const change =document.getElementById('choice2_stone2');
            change.style.backgroundColor = 'green'
            setTimeout(() => {
                change.style.backgroundColor = 'rgb(9, 21, 43)';
            }, 2000);
            comp_score_p.textContent = comp_score;
            comp_score_p.style.fontSize = "4rem";
        }
    }
}

const computer = (userChoice) => {
    let options = ['stone2', 'paper2', 'scissors2'];
    let index = Math.floor(Math.random() * 3);
    let comp_choose = options[index];
    console.log(userChoice);
    console.log(comp_choose);
    playgame(userChoice, comp_choose);

    // Remove hovered class from all choices in choices2
    choices2.forEach(c => c.classList.remove('hovered'));

    // Apply the hovered class to the computer's choice
    choices2.forEach((choice2) => {
        let id_of_choice2 = choice2.querySelector('img').getAttribute("id");
        if (comp_choose == id_of_choice2) {
            choice2.classList.add('hovered');
            setTimeout(() => {
                choice2.classList.remove('hovered');
            }, 2000); // 2000 milliseconds = 2 seconds
        }
    });
}

function main() {
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            // Remove hovered class from all choices
            choices.forEach(c => c.classList.remove('hovered'));

            // Get the id of the clicked element
            const userChoice = choice.querySelector('img').getAttribute("id");
            
            // Add hovered class to the selected choice
            choice.classList.add('hovered');
            
            // Remove hovered class after 2 seconds
            setTimeout(() => {
                choice.classList.remove('hovered');
            }, 2000); // 2000 milliseconds = 2 seconds
            
            computer(userChoice);
        });
    });
}

main();

const mode = document.querySelector('#mode')
flag =false
mode.addEventListener('click', ()=>{
    if (flag == false){
    document.querySelector('body').style.backgroundColor = 'black'
    flag = true
    
}
else{
    document.querySelector('body').style.backgroundColor = 'white'
    flag = false
}
})

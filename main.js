let spacesVal =
{
        s11: document.getElementById('11'),
        s12: document.getElementById('12'),
        s13: document.getElementById('13'),
        s21: document.getElementById('21'),
        s22: document.getElementById('22'),
        s23: document.getElementById('23'),
        s31: document.getElementById('31'),
        s32: document.getElementById('32'),
        s33: document.getElementById('33')
}

let clickArea = document.getElementById('totalSpaces')
let symb = 'O'
let result = document.getElementById('result')

function testMatch()
{
    if (spacesVal.s11.innerHTML !== '...' && spacesVal.s22.innerHTML !== '...' && spacesVal.s33.innerHTML !== '...' && spacesVal.s11.innerHTML === spacesVal.s22.innerHTML && spacesVal.s22.innerHTML === spacesVal.s33.innerHTML 
        || spacesVal.s13.innerHTML !== '...' && spacesVal.s22.innerHTML !== '...' && spacesVal.s31.innerHTML !== '...' && spacesVal.s13.innerHTML === spacesVal.s22.innerHTML && spacesVal.s22.innerHTML === spacesVal.s31.innerHTML 
        || spacesVal.s11.innerHTML !== '...' && spacesVal.s21.innerHTML !== '...' && spacesVal.s31.innerHTML !== '...' && spacesVal.s11.innerHTML === spacesVal.s21.innerHTML && spacesVal.s21.innerHTML === spacesVal.s31.innerHTML 
        || spacesVal.s12.innerHTML !== '...' && spacesVal.s22.innerHTML !== '...' && spacesVal.s32.innerHTML !== '...' && spacesVal.s12.innerHTML === spacesVal.s22.innerHTML && spacesVal.s22.innerHTML === spacesVal.s32.innerHTML 
        || spacesVal.s13.innerHTML !== '...' && spacesVal.s23.innerHTML !== '...' && spacesVal.s33.innerHTML !== '...' && spacesVal.s13.innerHTML === spacesVal.s23.innerHTML && spacesVal.s23.innerHTML === spacesVal.s33.innerHTML 
        || spacesVal.s11.innerHTML !== '...' && spacesVal.s12.innerHTML !== '...' && spacesVal.s13.innerHTML !== '...' && spacesVal.s11.innerHTML === spacesVal.s12.innerHTML && spacesVal.s12.innerHTML === spacesVal.s13.innerHTML 
        || spacesVal.s21.innerHTML !== '...' && spacesVal.s22.innerHTML !== '...' && spacesVal.s23.innerHTML !== '...' && spacesVal.s21.innerHTML === spacesVal.s22.innerHTML && spacesVal.s22.innerHTML === spacesVal.s23.innerHTML 
        || spacesVal.s31.innerHTML !== '...' && spacesVal.s32.innerHTML !== '...' && spacesVal.s33.innerHTML !== '...' && spacesVal.s31.innerHTML === spacesVal.s32.innerHTML && spacesVal.s32.innerHTML === spacesVal.s33.innerHTML)
    {
        result.innerHTML = `${symb} player wins!`
    }

    else
    {
        return
    }
}

function changeSymb()
{
    if(symb == 'O')
    {
        symb = 'X'
    }
    else
    {
        symb = 'O'
    }
}

spacesVal.s11.addEventListener('click', () =>
{
        spacesVal.s11.innerHTML = symb
        testMatch()
        changeSymb()
})
spacesVal.s12.addEventListener('click', () =>
{
        spacesVal.s12.innerHTML = symb
        testMatch()
        changeSymb()
})
spacesVal.s13.addEventListener('click', () =>
{
        spacesVal.s13.innerHTML = symb
        testMatch()
        changeSymb()
})
spacesVal.s21.addEventListener('click', () =>
{
        spacesVal.s21.innerHTML = symb
        testMatch()
        changeSymb()
})
spacesVal.s22.addEventListener('click', () =>
{
        spacesVal.s22.innerHTML = symb
        testMatch()
        changeSymb()
})
spacesVal.s23.addEventListener('click', () =>
{
        spacesVal.s23.innerHTML = symb
        testMatch()
        changeSymb()
})
spacesVal.s31.addEventListener('click', () =>
{
        spacesVal.s31.innerHTML = symb
        testMatch()
        changeSymb()
})
spacesVal.s32.addEventListener('click', () =>
{
        spacesVal.s32.innerHTML = symb
        testMatch()
        changeSymb()
})
spacesVal.s33.addEventListener('click', () =>
{
        spacesVal.s33.innerHTML = symb
        testMatch()
        changeSymb()
})


    


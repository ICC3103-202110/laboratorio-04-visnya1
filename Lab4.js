let prompt = require('prompt-sync')({sigint:true});

function view(counter)
{
    return '    Count: ' + counter + '\n\n    (-) (+) \n\n\n    (q) for quit \n';
}

function update(msg,counter)
{
    if(msg === '-')
    {
        return counter - 1;
    }
    else if(msg === '+')
    {
        return counter + 1;
    }
    else       //cualquier otro caracter
    {
        return counter;
    }
}

function app(counter)
{
    while(true)
    {
        const currentView = view(counter);
        console.clear(); 
        console.log(currentView);
        const msg = prompt('What would you do? ');
        counter = update(msg,counter);
        if(msg === 'q')
        {
            break;
        }
    }
}

app(0)
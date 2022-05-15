let exp = "";

function compute(caller)
{
    console.log(isNaN(parseInt(caller)));
    if(caller == "CE")
    {
        exp = "";
    }
    else if(!isNaN(parseInt(caller)))
    {
        console.log(caller);
        exp+=parseInt(caller);
    }
    else if (caller == "back")
    {
        exp = exp.slice(0,-1);
    }
    else if (caller == "disp")
    {
        // Do Nothing
    }
    else if (caller == "=")
    {
        try {
            exp = eval(exp);
        } catch (e) {
            exp = e;
        }
        document.querySelector("#disp").innerText = exp;
        exp = document.querySelector("#disp").innerText;
        return;
    }
    else
    {
        console.log(caller);
        exp+=caller;
    }
    document.querySelector("#disp").innerText = exp;
}
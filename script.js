const calculateTmp = () => 
	{
         const numberTmp = document.getElementById('tmp').value;

         const tmpSelected = document.getElementById('diff');

         const valueTmp = diff.options[tmpSelected.selectedIndex].value;

        const celToFah = (cel) => 
        {
            
            let fahrenheit = Math.round((cel * 9/5) + 32); 
            return fahrenheit;
	    }

	    const fehToCel = (fehr) => 
	    {

            let celsius = Math.round((fehr - 32) * 5/9 );
            return celsius;
        }

        let result;


if(valueTmp == 'cel')
{

result = celToFah(numberTmp);
document.getElementById('resultContainer').innerHTML= ` ${result}F`;

}
else
{

result = fehToCel(numberTmp);
document.getElementById('resultContainer').innerHTML= ` ${result}C`;

}

}
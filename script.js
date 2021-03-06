//array unidimensionale contenente il nome degli items
var itemsName = ["item1","item2","item3"];
//array unidimensionale contenente la quantità degli items
var itemsQuantity = ["10","15","5"];
//limite della quantità totale warehouse
var limit=30;

//funzione che visualizza il form di per effettuare nuovo ordine
function visualize()
{
	checkLimit();
	document.getElementById('divForm').style.display='block';
}

//funzione che prende l'input del uovo ordine dell'utente e aggiorna... 
function update()
{
	//inizializzo con i dati in input
	inputItem = document.getElementById('ItemInput').value;
	inputQuantity = document.getElementById('QuantityInput').value;
	if(!Number.isInteger(parseInt(inputQuantity))) //controllo che la quatità sia un intero...
	{
		alert("Errore inserimento quantità!!!");  //...se non lo è, mando l'errore è resetto
		document.getElementById('inputForm').reset();
	}
	else //...altrimenti continuo
	{
		find = false;
		
		for (i = 0; i < itemsName.length && find == false; i++) { 
	    	if(itemsName[i]==inputItem)
			{
				itemsQuantity[i]=parseInt(itemsQuantity[i])+parseInt(inputQuantity); //...l'array delle quantità item già presente
				find=true;
			}
		}
		if(find==false)	  //...l'array dei nomi e delle quantità se item non presente
		{
			itemsName.push(inputItem);
			itemsQuantity.push(inputQuantity);
		}
		checkLimit();
		document.getElementById('inputForm').reset();	//resetta i campi del form di input del nuovo ordine
		document.getElementById('divForm').style.display='none';  //rende invisibile il form del nuovo ordine
		stampaTabella();
	}
	
}

//funzione che stampa la tebella degli item e relative quantità in base ai due array di quantità e nomi items
function stampaTabella()
{
	var tabella = '<table> <tr>';
	
	for(i = 0; i < itemsName.length; i++)
	{
		tabella=tabella+'<td>'+itemsName[i]+'</td>';
	}
	tabella=tabella+'</tr><tr>';
	for(i = 0; i < itemsQuantity.length; i++)
	{
		tabella=tabella+'<td>'+itemsQuantity[i]+'</td>';
	}
	tabella=tabella+'</tr></table>';
	
	document.getElementById("tab").innerHTML = tabella;
}

//funzione di settaggio nuovo limite
function setLimit()
{
	checkLimit();
}

//funzione che controlla se il totale delle quantità degli items supera il limite di capieza imposto
function checkLimit()
{
	var sum=0;
	var tmplimit=limit;
	limit=document.getElementById('QuantityLimit').value;  //inizializzo il limite
	
	if(!Number.isInteger(parseInt(limit)))   //controllo che la quatità sia un intero...
	{
		alert("Errore inserimento limite!!!");
		document.getElementById('QuantityLimit').value = tmplimit;   //...se non lo è, mando l'errore è resetto
		limit=tmplimit;
	}
	else
	{
		
		for(i = 0; i < itemsQuantity.length; i++)
		{
			sum=sum+parseInt(itemsQuantity[i]);
		}
		if(sum>limit)
			alert("Attenzione superamento del limite: Amount="+sum+" Limit="+limit);  //mando un alert all'utente
	}
}







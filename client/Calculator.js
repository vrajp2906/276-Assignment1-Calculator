function myPercentage1()
{
	var numerator;
	var denominator;
	var calculatep;
	var p;
	if (document.getElementById("top1").value == "")
	{
		p = 0;
	}
	else
	{
		numerator = document.getElementById("top1").value;
		denominator = document.getElementById("bottom1").value;
		calculatep = numerator/denominator;
		p = calculatep * 100;
	}
		p = p.toFixed(1);
		console.log(p);
		
		document.getElementById("show_p1").innerHTML = p;
}

function myPercentage2()
{
	var numerator;
	var denominator;
	var calculatep;
	var p;
	if (document.getElementById("top2").value == "")
	{
		p = 0;
	}
	else
	{
		numerator = document.getElementById("top2").value;
		denominator = document.getElementById("bottom2").value;
		calculatep = numerator/denominator;
		p = calculatep * 100;
	}
		p = p.toFixed(1);
		console.log(p);
		
		document.getElementById("show_p2").innerHTML = p;
}

function myPercentage3()
{
	var numerator;
	var denominator;
	var calculatep;
	var p;
	if (document.getElementById("top3").value == "")
	{
		p = 0;
	}
	else
	{
		numerator = document.getElementById("top3").value;
		denominator = document.getElementById("bottom3").value;
		calculatep = numerator/denominator;
		p = calculatep * 100;
	}
		p = p.toFixed(1);
		console.log(p);
		
		document.getElementById("show_p3").innerHTML = p;
}

function myPercentage4()
{
	var numerator;
	var denominator;
	var calculatep;
	var p;
	if (document.getElementById("top4").value == "")
	{
		p = 0;
	}
	else
	{
		numerator = document.getElementById("top4").value;
		denominator = document.getElementById("bottom4").value;
		calculatep = numerator/denominator;
		p = calculatep * 100;
	}
		p = p.toFixed(1);
		console.log(p);
		
		document.getElementById("show_p4").innerHTML = p;
}

function myMean()
{
	var grA1;
	var grA2;
	var grA3;
	var grA4;
	

	
	if (document.getElementById("top1").value == "")
	{
		grA1 = 0;
	}
	
	else{
		var grA1 = document.getElementById("top1").value / document.getElementById("bottom1").value;
	}
	
	if (document.getElementById("top2").value == "")
	{
		grA2 = 0;
	}
	else {
		grA2 = document.getElementById("top2").value / document.getElementById("bottom2").value;
	}
	//
	if (document.getElementById("top3").value == "")
	{
		grA3 = 0;
	}
	else{
		grA3 = document.getElementById("top3").value / document.getElementById("bottom3").value;
	}
	
	if (document.getElementById("top4").value == "")
	{
			grA4 = 0;
	}
	else{
		var grA4 = document.getElementById("top4").value / document.getElementById("bottom4").value;
	}
	
	

	//var grA1 = document.getElementById("top1").value / document.getElementById("bottom1").value;
	//var grA2 = document.getElementById("top2").value / document.getElementById("bottom2").value;
	//var grA3 = document.getElementById("top3").value / document.getElementById("bottom3").value;
	//var grA4 = document.getElementById("top4").value / document.getElementById("bottom4").value;
	
	
	
	var sum = grA1 + grA2 + grA3 + grA4;
	var average = (sum/4) * 100;
	average = average.toFixed(1);
	
	document.getElementById("calculated_result").innerHTML = average;
	
}

function myWeight()
{
	//var grA1 = document.getElementById("top1").value / document.getElementById("bottom1").value;
	//var grA2 = document.getElementById("top2").value / document.getElementById("bottom2").value;
	//var grA3 = document.getElementById("top3").value / document.getElementById("bottom3").value;
	//var grA4 = document.getElementById("top4").value / document.getElementById("bottom4").value;
	
	//var weightA1 = document.getElementById("w1").value;
	//var weightA2 = document.getElementById("w2").value;
	//var weightA3 = document.getElementById("w3").value;
	//var weightA4 = document.getElementById("w4").value;
	
	var grA1;
	var grA2;
	var grA3;
	var grA4;
	
	var weightA1;
	var weightA2;
	var weightA3;
	var weightA4;
	
	/*
	if (document.getElementById("top1").value == "" && document.getElementById("top2").value == "" && document.getElementById("top3").value == "" && document.getElementById("top4").value == "")
	{
		grA1 = 0;
		grA2 = 0;
		grA3 = 0;
		grA4 = 0;
		weightA1 = 0;
		weightA2 = 0;
		weightA3 = 0;
		weightA4 = 0;
	}*/
	
	
	if (document.getElementById("top1").value == "")
	{
		grA1 = 0;
		weightA1 = 0;
	}
	
	else{
		grA1 = document.getElementById("top1").value / document.getElementById("bottom1").value;
		weightA1 = document.getElementById("w1").value;
	}
	
	if (document.getElementById("top2").value == "")
	{
		grA2 = 0;
		weightA2 = 0;
	}
	else {
		grA2 = document.getElementById("top2").value / document.getElementById("bottom2").value;
		weightA2 = document.getElementById("w2").value;
	}
	
	
	///////////
	if (document.getElementById("top3").value == "")
	{
		grA3 = 0;
		weightA3 = 0;
	}
	else{
		grA3 = document.getElementById("top3").value / document.getElementById("bottom3").value;
		weightA3 = document.getElementById("w3").value;
	}
	////////////////
	if (document.getElementById("top4").value == "")
	{
			grA4 = 0;
			weightA4 = 0;
	}
	else{
		grA4 = document.getElementById("top4").value / document.getElementById("bottom4").value;
		weightA4 = document.getElementById("w4").value;
	}
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	var sumWeightage = weightA1*1 + weightA2*1+ weightA3*1 + weightA4*1;
	var sum = (weightA1*grA1)+(weightA2*grA2)+(weightA3*grA3)+(weightA4*grA4);
		
	var w = sum/sumWeightage;
	var q = w*100;
	q = q.toFixed(1);
		
	document.getElementById("calculated_result").innerHTML = q;

	
}
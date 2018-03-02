function toTitleCase(str) 
{
	str = toLowerCase(str);
	var words = str.split(' ');
	var sonuc = "";
	var data="";
	$.each(words, function() 
	{
		data= this.substring(0,1);
		data = data.replace("ı", "I");
		data = data.replace("ğ", "Ğ");
		data = data.replace("ü", "Ü");
		data = data.replace("ş", "Ş");
		data = data.replace("i", "İ");
		data = data.replace("ö", "Ö");
		data = data.replace("ç", "Ç");
		data = data.toUpperCase();
		sonuc += data + this.substring(1) + ' ';
	});		
	return sonuc;
}

function toLowerCase(str) 
{
	var words = str.split(' ');
	var sonuc = "";
	var data="";
	sonuc = str.replace("I", "ı");
	sonuc = sonuc.replace("Ğ", "ğ");
	sonuc = sonuc.replace("Ü", "ü");
	sonuc = sonuc.replace("Ş", "ş");
	sonuc = sonuc.replace("İ", "i");
	sonuc = sonuc.replace("Ö", "ö");
	sonuc = sonuc.replace("Ç", "ç");
	sonuc = sonuc.toLowerCase();
	return sonuc;
}

function toUpperCase(str) 
{
	var words = str.split(' ');
	var sonuc = "";
	var data="";
	sonuc = str.replace("ı", "I");
	sonuc = sonuc.replace("ğ", "Ğ");
	sonuc = sonuc.replace("ü", "Ü");
	sonuc = sonuc.replace("ş", "Ş");
	sonuc = sonuc.replace("i", "İ");
	sonuc = sonuc.replace("ö", "Ö");
	sonuc = sonuc.replace("ç", "Ç");
	sonuc = sonuc.toUpperCase();
	return sonuc;
}
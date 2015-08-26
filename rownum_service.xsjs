var schema = '<your_schema>';
var procedure =  'testes::rownum_test';
var resultado = [];

function gera_output(){
	return resultado.join('');
}

function download(nome_arquivo){
    var conteudo = gera_output();
    $.response.headers.set('Content-Disposition', 'attachment; filename=' + nome_arquivo);
    $.response.contentDisposition = "attachment";
    $.response.status = $.net.http.OK;
    $.response.setBody(conteudo); 
}
var connection = $.hdb.getConnection();  
var tableDummy = connection.loadProcedure(schema,procedure);  
var results = tableDummy();  

for (var i = 0; i < results.RETORNO.length; i++) {  
	resultado.push(results.RETORNO[i].LINHA);  
}

download('teste.txt');




date = new Date();
apiUrlDollar = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?%40dataCotacao='${date}'&%24format=json" -H "accept: application/json;odata.metadata=minimal"`;

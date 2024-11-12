function clicar1() {
    window.open('slide.pdf', '_blank')
}

function clicar2() {
    window.alert (`Ana Júlia Carvalho @anajucarvalho_` +"\n"+"\n"+ "Daniela de Paiva @danielapaivass"  +"\n"+"\n"+  "Emanuelly dos Santos @emanuellymss" +"\n"+"\n"+ "Enzo Andrés Rodrigues @enzo_andres_rodrigues"+"\n"+"\n"+"Lara Malta Nitta @_laramalta_"+"\n"+"\n"+"Letícia Valvazori dos Santos @levalvazori"+"\n"+"\n"+"Maria Fernanda Sakamoto @maria_fernandaskc"+"\n"+"\n"+"Matheus Henrique B. da costa @matheus.h456"+"\n"+"\n"+"Milena Garcia @milenapq")
}

function copiarTexto() {
    // Define o texto que você quer copiar
    const textoParaCopiar = "Você é um advogado de defesa que precisa elaborar uma resposta à acusação de uma denúncia realizada pelo Ministério Público da Comarca de Fortaleza-Ceará. A denúncia apresenta a contra o meu cliente pela prática do artigo 155, caput, c/c artigo 14, inciso II, do Código Penal, e sua tarefa é refutar cada uma dessas alegações de forma clara, precisa e com argumentos jurídicos sólidos. Por favor, elabore uma RESPOSTA À ACUSAÇÃO, respeitosa e seguindo as normas processuais, respondendo ponto a ponto cada alegação com base nos argumentos fornecidos abaixo e quaisquer outros argumentos jurídicos aplicáveis. Instruções para a IA: 1.	A RESPOSTA À ACUSAÇÃO deve ser estruturada de forma a responder diretamente a cada alegação. 2.	Use linguagem formal e respeitosa. 3.	Forneça respostas que incluam fundamentos jurídicos aplicáveis e adequados a cada alegação específica. 4.	Caso necessário, argumente com base em provas documentais, testemunhais ou periciais mencionadas, e traga a fundamentação legal apropriada para fortalecer a defesa.";
    
    // Usa a API Clipboard para copiar o texto
    navigator.clipboard.writeText(textoParaCopiar)
}

function abrirEmNovaGuia() {
    // URL da página que você quer abrir
    const url = "https://chat.com";
    
    // Abre a URL em uma nova guia
    window.open(url, '_blank');
}
const INSECURE_COMBINATIONS = {
    'Água Sanitária+Vinagre': false,
    'Água Sanitária+Detergente': true,
    'Vinagre+Detergente': true,
    'Água Sanitária+Álcool': false,
    'Vinagre+Álcool': true,
    'Detergente+Álcool': true,
    'Água Sanitária+Sabão Líquido': true,
    'Vinagre+Sabão Líquido': true,
    'Detergente+Sabão Líquido': true,
    'Água Sanitária+Desinfetante': true,
    'Vinagre+Desinfetante': false,
    'Detergente+Desinfetante': true,
  };
  
  const EXPLANATIONS = {
    'Água Sanitária+Vinagre': "A combinação de Água Sanitária e Vinagre produz gás cloro, que é tóxico.",
    'Água Sanitária+Detergente': "A combinação de Água Sanitária e Detergente é segura e pode ajudar na limpeza.",
    'Vinagre+Detergente': "A combinação de Vinagre e Detergente é segura e eficiente para limpeza.",
    'Água Sanitária+Álcool': "A combinação de Água Sanitária e Álcool pode produzir vapores tóxicos.",
    'Vinagre+Álcool': "A combinação de Vinagre e Álcool é segura e útil para limpeza.",
    'Detergente+Álcool': "A combinação de Detergente e Álcool é segura e pode ser eficaz na limpeza.",
    'Água Sanitária+Sabão Líquido': "A combinação de Água Sanitária e Sabão Líquido é segura e comum na limpeza.",
    'Vinagre+Sabão Líquido': "A combinação de Vinagre e Sabão Líquido é segura e eficaz para limpeza.",
    'Detergente+Sabão Líquido': "A combinação de Detergente e Sabão Líquido é segura e muito utilizada para limpeza.",
    'Água Sanitária+Desinfetante': "A combinação de Água Sanitária e Desinfetante é segura e potente para desinfecção.",
    'Vinagre+Desinfetante': "A combinação de Vinagre e Desinfetante pode ser perigosa e liberar vapores tóxicos.",
    'Detergente+Desinfetante': "A combinação de Detergente e Desinfetante é segura e eficaz.",
  };
  
  export function checkMixSafety(product1, product2) {
    const combination = [product1, product2].sort().join('+');
    const safe = INSECURE_COMBINATIONS[combination] || false;
    const explanation = EXPLANATIONS[combination] || 'Não há informações disponíveis para essa combinação.';
    return { safe, explanation };
  }
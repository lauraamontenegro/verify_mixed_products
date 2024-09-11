const COMBINATION_INFO = {
  insecure: {
    'Água Sanitária+Vinagre': "A combinação de Água Sanitária e Vinagre produz gás cloro, que é tóxico.",
    'Água Sanitária+Álcool': "A combinação de Água Sanitária e Álcool pode produzir vapores tóxicos.",
    'Vinagre+Desinfetante': "A combinação de Vinagre e Desinfetante pode ser perigosa e liberar vapores tóxicos.",
  },
  secure: {
    'Água Sanitária+Detergente': "A combinação de Água Sanitária e Detergente é segura e pode ajudar na limpeza.",
    'Vinagre+Detergente': "A combinação de Vinagre e Detergente é segura e eficiente para limpeza.",
    'Vinagre+Álcool': "A combinação de Vinagre e Álcool é segura e útil para limpeza.",
    'Detergente+Álcool': "A combinação de Detergente e Álcool é segura e pode ser eficaz na limpeza.",
    'Água Sanitária+Sabão Líquido': "A combinação de Água Sanitária e Sabão Líquido é segura e comum na limpeza.",
    'Vinagre+Sabão Líquido': "A combinação de Vinagre e Sabão Líquido é segura e eficaz para limpeza.",
    'Detergente+Sabão Líquido': "A combinação de Detergente e Sabão Líquido é segura e muito utilizada para limpeza.",
    'Água Sanitária+Desinfetante': "A combinação de Água Sanitária e Desinfetante é segura e potente para desinfecção.",
    'Detergente+Desinfetante': "A combinação de Detergente e Desinfetante é segura e eficaz.",
  }
};

export function checkMixSafety(product1, product2) {
  if (product1 === product2) {
    return { safe: true, explanation: 'A mistura de duas soluções iguais não apresenta risco.' };
  }

  const combination = [product1, product2].sort().join('+');

  if (COMBINATION_INFO.insecure[combination]) {
    return { safe: false, explanation: COMBINATION_INFO.insecure[combination] };
  } else if (COMBINATION_INFO.secure[combination]) {
    return { safe: true, explanation: COMBINATION_INFO.secure[combination] };
  } else {
    return { safe: false, explanation: 'Não há informações disponíveis para essa combinação.' };
  }
}
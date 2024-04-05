// Exporta uma função que recebe um objeto 'api'
module.exports = function(api) {
  // Habilita o cache para melhorar o desempenho durante os builds
  api.cache(true);
  
  // Retorna um objeto de configuração do Babel
  return {
    // Define os presets a serem usados pelo Babel
    presets: ['babel-preset-expo'],
  };
};

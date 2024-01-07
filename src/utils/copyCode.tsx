export default async function copyCode(text: string): Promise<void> {
  try {
    // Verifica se o navegador suporta a Clipboard API
    if (!navigator.clipboard) {
      throw new Error('A Clipboard API não é suportada neste navegador.');
    }

    console.log('oiiiiiii');

    if (text) {
      await navigator.clipboard.writeText(text);
      console.log('Código copiado com sucesso!');
    } else {
      console.error('A string do parâmetro está nula.');
    }
  } catch (error) {
    console.error('Erro ao copiar código:', error);
  }
}

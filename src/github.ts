export type Repository = {
  html_url: string;
  name: string;
  description: string;
  owner?: {
    login: string;
    html_url: string;
  };
};

/**
 * Busca repositórios no Github contento o termo de pesquisa informado
 * e retorna os 10 primeiros resultados
 * @param searchTerm Termo de pesquisa
 * @returns Array de repositorios
 */
export async function searchRepositories(searchTerm: string) {
  const url = new URL("https://api.github.com/search/repositories");
  url.searchParams.append("q", searchTerm);
  url.searchParams.append("per_page", "10");

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  const result = await response.json();

  return result.items as Promise<Repository[]>;
}

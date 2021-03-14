export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository?.description ?? "Default"}</p>
      <a href={repository?.html_url ?? "https://google.com"} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}

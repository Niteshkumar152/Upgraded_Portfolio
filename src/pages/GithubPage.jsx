function GithubPage() {
  return (
    <div>
      <h1>{process.env.REACT_APP_GITHUB_URL}</h1>
    </div>
  );
}

export default GithubPage;

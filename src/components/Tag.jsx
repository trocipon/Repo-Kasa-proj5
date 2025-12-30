
export default function Tag({ tags }) {
  return (
    <>
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag} className="tag-item">
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Host({ host }) {
  const parts = host.name.split(" ");
  const last = parts.pop();
  const first = parts.join(" ");

  return (
    <div className="host-container">
      <p className="host-name">
        {first}
        <br />
        {last}
      </p>
      <img className="host-picture" src={host.picture} />
    </div>
  );
}

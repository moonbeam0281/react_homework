
export default function UserProfileFunction({ name, age, hobby }) {
  return (
    <div className="card">
      <h3 className="cardTitle">Functional Component</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Hobby:</strong> {hobby}</p>
    </div>
  );
}

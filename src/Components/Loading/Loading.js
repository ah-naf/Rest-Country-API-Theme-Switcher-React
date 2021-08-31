import './Loading.css';

export default function Loading() {
  return (
    <div className="loading">
      <div className="uil-ring-css" style={{transform:"scale(0.79)"}}>
        <div></div>
      </div>
    </div>
  );
}

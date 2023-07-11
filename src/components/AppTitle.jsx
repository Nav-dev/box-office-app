export default function AppTitle(props) {
  const {
    title = 'Box Office',
    subtitle = 'Are you looking for movie or actor?',
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

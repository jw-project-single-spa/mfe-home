export default function Root(props) {
  console.log(props);
  return <section>{props.name} is mounteds!s</section>;
}
